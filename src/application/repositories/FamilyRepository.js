const { prismaClient } = require("../../libs/PrismaClient");
const emailService = require("../../libs/emailService");

class FamilyRepository {

  //* Cria uma família
  async createFamily(userId, nome) {
    return prismaClient.familia.create({
      data: {
        nome,
        membros: {
          create: {
            rotulo: 'PAIS', // Criador são os pais
            usuario: {
              connect: { id: userId },
            },
          },
        },
      },
    });
  };

  // Busca uma família pelo ID
  async isParent(familyId, userId) {
    return prismaClient.membrosDaFamilia.findFirst({
      where: { id_familia: familyId, id_usuario: userId, rotulo: 'PAIS' },
    });
  };

  //* Convida um membro para a família
  async inviteMember(familyId, email, inviterId) {
    const user = await prismaClient.usuario.findUnique({ where: { email } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // Verifica se o usuário já é membro da família
    const isMember = await prismaClient.membrosDaFamilia.findFirst({
      where: {
        id_familia: familyId,
        id_usuario: user.id,
        rotulo: 'PAIS',
      },
    });
    console.log("45", isMember);

    if (isMember) {
      throw new Error('Usuário já é membro da família');
    }

    // Verifica se já existe um convite pendente
    const existingInvitation = await prismaClient.familiaConvite.findFirst({
      where: { familiaId: familyId, email, status: 'PENDENTE' },
    });

    if (existingInvitation) {
      throw new Error('Convite já pendente para este usuário');
    }

    const invitation = await prismaClient.familiaConvite.create({
      data: {
        familiaId: familyId, // Corrija aqui também
        email,
        status: 'PENDENTE',
      },
    });

    // Busca o nome da família para o e-mail
    const family = await prismaClient.familia.findUnique({ where: { id: familyId } });
    const deepLink = `${process.env.DEEP_LINK_BASE_URL}/${invitation.id}`;

    // Envia o e-mail
    await emailService.sendInvitationEmail(email, family.nome, invitation.id, deepLink);

    return invitation;
  };

  //* Busca uma família pelo ID
  async getFamilyMembers(familyId) {
    return prismaClient.membrosDaFamilia.findMany({
      where: { id_familia: familyId },
      include: {
        familia: true,
        usuario: true
      },
    });
  };

  //* Lista convites pendentes
  async getPendingInvitations(userId) {
    const user = await prismaClient.usuario.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return prismaClient.familiaConvite.findMany({
      where: { email: user.email, status: 'PENDENTE' },
      include: { familia: true },
    });
  };

  //* Responde a um convite
  async respondInvitation(invitationId, userId, status) {
    const invitation = await prismaClient.familiaConvite.findUnique({
      where: { id: invitationId },
    });
    if (!invitation) {
      throw new Error('Convite não encontrado');
    }

    const user = await prismaClient.usuario.findUnique({ where: { id: userId } });
    if (user.email !== invitation.email) {
      throw new Error('O convite não pertence a este usuário');
    }

    if (status === 'ACEITO') {
      await prismaClient.membrosDaFamilia.create({
        data: {
          id_usuario: userId,
          id_familia: invitation.familiaId,
          rotulo: 'FILHO',
        },
      });
    }

    return prismaClient.familiaConvite.update({
      where: { id: invitationId },
      data: { status },
    });
  };

  //* Busca famílias do usuário
  async getUserFamilies(userId) {
    return prismaClient.familia.findMany({
      where: {
        membros: {
          some: { id_usuario: userId },
        },
      },
      include: {
        membros: {
          include: {
            usuario: true,
          },
        },
      },
    });
  };
}

module.exports = { FamilyRepository };
