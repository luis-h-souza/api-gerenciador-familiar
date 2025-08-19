const { z } = require("zod");

const ShoppingListschema = z.object({
  tipo: z.enum(["MERCADO", "FARMACIA", "PADARIA", "ACOUGUE", "OUTROS"]),
});

const idSchema = z.object({
  id: z.uuid({ message: "ID da lista deve ser um UUID válido" }),
});

const ItemSchema = z.object({
  listaId: z.uuid({ message: "ID da lista deve ser um UUID válido" }),
  descricao: z.string().min(1, "Descrição é obrigatória"),
  quantidade: z
    .number()
    .int()
    .positive("Quantidade deve ser um número positivo"),
});

const UpdateShoppingListSchema = ShoppingListschema.merge(idSchema);

class ShoppingListController {
  constructor(ShoppingListRepository) {
    this.ShoppingListRepository = ShoppingListRepository;
  }

  // Cria uma lista de compras
  async create({ body, req }) {
    try {
      const { tipo } = ShoppingListschema.parse(body);
      const accountId = req.accountId; // vindo do middleware

      const newList = await this.ShoppingListRepository.create({
        tipo,
        usuarioIdEnviou: accountId,
      });
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
      if (error.message === "Usuário não encontrado.") {
        return {
          statusCode: 404,
          body: { message: error.message },
        };
      }
      if (error.message === "A placa já está registrada.") {
        return {
          statusCode: 400,
          body: { message: error.message },
        };
      }
      console.error("Erro ao criar veículo:", error);
      return {
        statusCode: 500,
        body: { message: "Erro interno do servidor" },
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
      if (error.message === "Listas de compra não encontradas.") {
        return {
          statusCode: 400,
          body: null,
        };
      }
    }
  };

  // Atualiza uma lista
  async update({ body, params, req }) {
    try {
      const { tipo } = ShoppingListschema.parse(body);
      const { id } = idSchema.parse(params);
      const accountId = req.accountId;

      const result = await this.ShoppingListRepository.update({
        tipo,
        listaId: id, // Passa o ID da URL para o repository
      });

      return {
        statusCode: 200,
        body: result,
      };
    } catch (error) {
      console.error("Erro no controlador:", error);
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: { errors: error.issues },
        };
      }
      if (error.code === "P2025") {
        return {
          statusCode: 404,
          body: { error: "Lista não encontrada!" },
        };
      }
      if (error.name === "PrismaClientValidationError") {
        return {
          statusCode: 400,
          body: { error: "Erro de validação no Prisma: " + error.message },
        };
      }
      return {
        statusCode: 500,
        body: { message: "Erro interno no servidor." },
      };
    }
  };

  // deleta uma lista
  async delete({ params }) {
    const { id } = idSchema.parse(params);
    console.log("linha 120", id);

    try {
      await this.ShoppingListRepository.delete(id);
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
      }

      if (error.code === "P2025") {
        return {
          statusCode: 404,
          body: { error: "Lista não encontrado!" },
        };
      }
      throw error;
    }
  };

  // Adicionar item a lista de compras
  async addItem({ body, req }) {
    try {
      const { listaId, descricao, quantidade } = ItemSchema.parse(body);
      const accountId = req.accountId;

      const novoItem = await this.ShoppingListRepository.addItem({
        listaId,
        descricao,
        quantidade,
      });

      return {
        statusCode: 201,
        body: novoItem,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: { errors: error.issues },
        };
      }
      if (error.message === "Lista de compras não encontrada.") {
        return {
          statusCode: 404,
          body: { message: error.message },
        };
      }
      console.error("Erro ao adicionar item:", error);
      return {
        statusCode: 500,
        body: { message: "Erro interno do servidor" },
      };
    }
  };

  // Lista itens de uma lista específica
  async getItemsByList({ params }) {
    try {
      const { listaId } = z
        .object({
          listaId: z.uuid({ message: "ID da lista deve ser um UUID válido" }),
        })
        .parse(params);

      const itens = await this.ShoppingListRepository.getItemsByList({
        listaId,
      });

      return {
        statusCode: 200,
        body: itens,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: { errors: error.issues },
        };
      }
      return {
        statusCode: 500,
        body: { message: "Erro interno do servidor" },
      };
    }
  };

  // async markItemAsPurchased(body, params, req) {
  //   const { listaId, descricao, quantidade } = ItemSchema.parse(body);
  //   const accountId = req.accountId;
  // };

}

module.exports = { ShoppingListController };
