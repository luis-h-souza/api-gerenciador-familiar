const { prismaClient } = require("../../libs/PrismaClient");

class FamilyRepository {

  async execute({ id_familia, id_usuario, email }) {
    // Verifica se a família existe e inclui os usuários associados
    const family = await prismaClient.familia.findUnique({
      where: {
        id: id_familia,
      },
      include: {
        usuarios: true,
      },
    });

    if (!family) {
      throw new Error("Família não encontrada");
    }

    // Verifica se o usuário convidado existe pelo e-mail
    const invitedUser = await prismaClient.usuario.findUnique({
      where: { email: email },
      include: {
        familia_usuarios: true, // Inclui os usuários da família para verificar se já está
      }
    })

    if (!invitedUser) {
      throw new Error("Usuário não encontrado");
    }

    if (email === undefined || email === null) {
      throw new Error("E-mail não informado");
    }

    // Verifica se o usuário já está na família
    const existingFamilyUser = await prismaClient.familia_usuarios.findFirst({
      where: {
        id_usuario: invitedUser.id,
        id_familia: id_familia,
      },
    });

    if (existingFamilyUser) {
      throw new Error("Usuário já está na família");
    }

    // Adiciona o usuário à família
    await prismaClient.familia_usuarios.create({
      data: {
        id_usuario: invitedUser.id,
        id_familia,
        rotulo: "FILHO", // ou outro rótulo se desejar
      }
    });

    // Cria uma notificação interna para o usuário convidado
    const notificacao = await prismaClient.lembrete.create({
      data: {
        titulo: `Convite para a família ${family.nome}`,
        descricao: `Você foi convidado para a família ${family.nome}`,
        dataHora: new Date(),
        usuarioIdRecebeu: id_usuario, // usuário que enviou o convite
        familiaId: id_familia,
        tipo: "CONVITE_FAMILIA", // se tiver enum/tipo
        lida: false,
      },
      select: {
        descricao: true,
        dataHora: true,
        familia: {
          select: {
            id: true,
            nome: true,
          }
        },
        usuarioEnviou: {
          select: {
            id: true,
            name: true,
          }
        },
        usuarioRecebeu: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });

    return {
      family,
      invitedUser,
      message: "Usuário adicionado à família e notificação enviada via app",
      notification: {
        usuarioIdRecebeu: id_usuario,
        descricao: notificacao.descricao,
        dataHora: notificacao.dataHora,
        familia: {
          id: family.id,
          nome: family.nome,
        },
        lembrete: {
          usuarioEnviou: {
            id: id_usuario,
            nome: notificacao.usuarioIdEnviou.name, // buscar nome do usuário que convidou
          },
          usuarioRecebeu: {
            id: invitedUser.id,
            nome: invitedUser.name,
          },
        },
        tipo: notificacao.tipo,
        lida: notificacao.lida,
      }
    };
  }
}

module.exports = { FamilyRepository };
