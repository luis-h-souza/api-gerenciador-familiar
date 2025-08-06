// lista as 5 últimas registros de atividades
async function getRecentActivities(){
  const activities = await prismaClinet.activities.findMany({
    take: 5,
    oderBy: {
      dataHora: 'desc'
    },
  })
  return activities;
}

// Função para buscar as últimas atividades
async function getUltimasAtividades(limite = 10) {
  try {
    const atividades = await prisma.atividade.findMany({
      take: limite, // Limita o número de resultados
      orderBy: {
        datHora: 'desc' // Ordena por data/hora em ordem descendente
      },
      include: {
        tarefa: {
          select: {
            id: true,
            descricao: true,
            status: true,
            usuario: {
              select: {
                id: true,
                // Inclua outros campos do usuário se necessário
              }
            }
          }
        },
        lembrete: {
          select: {
            id: true,
            descricao: true,
            dataHora: true,
            status: true,
            usuarioEnviou: {
              select: {
                id: true,
                // Inclua outros campos do usuário se necessário
              }
            },
            listaDeCompra: {
              select: {
                id: true,
                tipo: true,
                status: true
              }
            },
            veiculo: {
              select: {
                id: true,
                marca: true,
                modelo: true,
                placa: true
              }
            }
          }
        },
        lista: {
          select: {
            id: true,
            tipo: true,
            status: true,
            usuarioEnviou: {
              select: {
                id: true,
                // Inclua outros campos do usuário se necessário
              }
            }
          }
        },
        veiculo: {
          select: {
            id: true,
            marca: true,
            modelo: true,
            placa: true,
            usuario: {
              select: {
                id: true,
                // Inclua outros campos do usuário se necessário
              }
            }
          }
        }
      }
    });

    return atividades;
  } catch (error) {
    console.error('Erro ao buscar atividades:', error);
    throw error;
  }
}

// Exemplo de uso em uma rota Express
const express = require('express');
const router = express.Router();

router.get('/ultimas-atividades', async (req, res) => {
  try {
    const limite = parseInt(req.query.limite) || 10; // Permite definir limite via query param
    const atividades = await getUltimasAtividades(limite);
    res.json(atividades);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar atividades' });
  }
});

module.exports = router;
