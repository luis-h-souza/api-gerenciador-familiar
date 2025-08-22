const { z } = require('zod');

const createFamilySchema = z.object({
  nome: z.string().min(1, 'Nome da família é obrigatório').max(50, 'Nome da família deve ter no máximo 50 caracteres'),
});

const inviteMemberSchema = z.object({
  email: z.string().email('E-mail inválido'),
});

const respondInvitationSchema = z.object({
  invitationId: z.uuid('ID do convite inválido'),
  status: z.enum(['ACEITO', 'REJEITADO'], { message: 'Status deve ser ACEITO ou REJEITADO' }),
});

class FamilyController {
  constructor(FamilyRepository) {
    this.FamilyRepository = FamilyRepository;
  }

  // Cria uma família
  async createFamily(req, res) {
    const { nome } = createFamilySchema.parse(req.body);
    const userId = req.user.id;
    const family = await this.FamilyRepository.createFamily(userId, nome);
    return {
      statusCode: 201,
      body: family
    }
  };

  // Convida um membro para a família
  async inviteMember(req, res) {
    try {
      const { email } = inviteMemberSchema.parse(req.body);
      const familyId = req.params.familyId; // /family/:familyId/invite
      const userId = req.user.id;

      // Verifica se o usuário é "PAIS" da família
      const isParents = await this.FamilyRepository.isParent(familyId, userId);

      if (!isParents) {
        return {
          statusCode: 403,
          body: { error: 'Somente pais podem convidar membros para família' }
        }
      }

      const invitation = await this.FamilyRepository.inviteMember(familyId, email, userId);
      return {
        statusCode: 201,
        body: invitation
      };

    } catch (error) {
      return {
        statusCode: 400,
        body: { error: error.message, details: error.errors },
      }
    }
  };

  // Lista membros da família
  async getFamilyMembers(req, res) {
    try {
      const familyId = req.params.familyId;
      const members = await this.FamilyRepository.getFamilyMembers(familyId);
      return {
        statusCode: 200,
        body: members
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: { error: error.message }
      };
    }
  }

  // Lista convites pendentes
  async getPendingInvitations(req, res) {
    try {
      const userId = req.user.id;
      const invitations = await this.FamilyRepository.getPendingInvitations(userId);
      return {
        statusCode: 200,
        body: invitations
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: { error: error.message },
      }
    }
  };

  // Responde a um convite
  async respondInvitation(req, res) {
    try {
      const { invitationId, status } = respondInvitationSchema.parse(req.body);
      const userId = req.user.id;
      const invitation = await this.FamilyRepository.respondInvitation(invitationId, userId, status);
      return {
        statusCode: 200,
        body: invitation,
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: { error: error.message },
      }
    }
  };

  // Busca famílias do usuário
  async getUserFamilies(req, res) {
    try {
      const userId = req.user.id;
      const families = await this.FamilyRepository.getUserFamilies(userId);
      return {
        statusCode: 200,
        body: families
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: { error: error.message },
      }
    }
  };
}

module.exports = { FamilyController };
