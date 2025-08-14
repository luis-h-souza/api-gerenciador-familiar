const { z } = require("zod");

const ShoppingListschema = z.object({
  tipo: z.enum(["MERCADO", "FARMACIA", "PADARIA", "ACOUGUE", "OUTROS"]),
  status: z.boolean().optional(), // status é opcional, usa default(false) se não fornecido
});
const idSchema = z.object({
  listaId: z.string().uuid({ message: 'ID da lista deve ser um UUID válido' })
});

const UpdateShoppingListSchema = ShoppingListschema.merge(idSchema);

class ShoppingListController {
  constructor(ShoppingListRepository) {
    this.ShoppingListRepository = ShoppingListRepository;
  }

  // Cria uma lista de compras
  async create({ body, req }) {
    try {
      const { tipo, status } = ShoppingListschema.parse(body);
      const accountId = req.accountId // vindo do middleware

      const newList = await this.ShoppingListRepository.create({ tipo, status, usuarioIdEnviou: accountId });
      return {
        statusCode: 201,
        body: newList,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: { errors: error.issues },
        };
      }
      if (error.message === 'Usuário não encontrado.') {
        return {
          statusCode: 404,
          body: { message: error.message },
        };
      }
      if (error.message === 'A placa já está registrada.') {
        return {
          statusCode: 400,
          body: { message: error.message },
        };
      }
      console.error('Erro ao criar veículo:', error);
      return {
        statusCode: 500,
        body: { message: 'Erro interno do servidor' },
      };
    }
  };

  // lista todos os veículo
  async show() {
    try {
      const lists = await this.ShoppingListRepository.show();
      return {
        statusCode: 200,
        body: lists,
      };
    } catch (error) {
      if (error.message === 'Listas de compra não encontradas.') {
        return {
          statusCode: 400,
          body: null,
        };
      }
    }
  };

  // Atualiza uma lista
  async update({ body, req }) {
    console.log('Requisição recebida no controlador com body:', body);
    try {
      const { tipo, status, listaId } = UpdateShoppingListSchema.parse(body);
      const accountId = req.accountId;
      console.log('Dados validados:', { tipo, status, listaId, accountId });
      const result = await this.ShoppingListRepository.update({
        tipo,
        status,
        usuarioIdEnviou: accountId,
        listaId,
      });
      return {
        statusCode: 200,
        body: result,
      };
    } catch (error) {
      console.error('Erro no controlador:', error);
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }
      if (error.code === 'P2025') {
        return {
          statusCode: 404,
          body: { error: 'Lista não encontrada!' },
        };
      }
      if (error.name === 'PrismaClientValidationError') {
        return {
          statusCode: 400,
          body: { error: 'Erro de validação no Prisma: ' + error.message },
        };
      }
      return {
        statusCode: 500,
        body: { message: 'Erro interno no servidor.' },
      };
    }
  }

  // deleta uma lista
  async delete({ params }) {
    const { id } = idSchema.parse(params);

    try {
      await this.ShoppingListRepository.delete({ id })
      return {
        statusCode: 204,
        body: null,
      };

    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      };

      if (error.code === 'P2025') {
        return {
          statusCode: 404,
          body: { error: 'Lista não encontrado!' },
        };
      };
      throw error;
    }
  };
}

module.exports = { ShoppingListController };
