# 🏠 API Gerenciador Familiar

Uma API RESTful desenvolvida em Node.js para gerenciamento de famílias, tarefas, veículos e listas de compras. O sistema permite que famílias se organizem de forma colaborativa através de diferentes funcionalidades integradas.

## 📋 Índice

- [Características](#-características)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso da API](#-uso-da-api)
- [Endpoints](#-endpoints)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## ✨ Características

### 👨‍👩‍👧‍👦 Gestão Familiar
- Criação e gerenciamento de famílias
- Sistema de convites por email
- Controle de permissões (Pais/Filhos)
- Listagem de membros da família

### ✅ Sistema de Tarefas
- Criação, edição e exclusão de tarefas
- Controle de status (concluída/pendente)
- Associação de tarefas aos usuários

### 🚗 Gestão de Veículos
- Cadastro de veículos da família
- Registro de manutenções
- Controle de custos de manutenção
- Histórico de serviços

### 🛒 Listas de Compras
- Criação de listas por categoria (Mercado, Farmácia, Padaria, Açougue, Outros)
- Adição de itens com quantidade
- Controle de itens comprados
- Compartilhamento entre membros da família

### 📊 Sistema de Atividades
- Log de todas as ações realizadas
- Histórico de atividades por usuário
- Rastreamento de mudanças em tempo real

### 🔐 Autenticação e Segurança
- Sistema de autenticação JWT
- Criptografia de senhas com bcrypt
- Middleware de proteção de rotas
- Validação de dados com Zod

## 🛠 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação
- **bcryptjs** - Criptografia de senhas
- **Zod** - Validação de schemas
- **Nodemailer** - Envio de emails
- **Swagger** - Documentação da API
- **Vercel** - Deploy e hospedagem

## 📁 Estrutura do Projeto

```
api-gerenciador-familiar/
├── src/
│   ├── application/
│   │   ├── controllers/     # Controladores da aplicação
│   │   ├── middlewares/     # Middlewares (auth, validação)
│   │   └── repositories/    # Camada de acesso a dados
│   ├── factories/           # Factory pattern para injeção de dependência
│   ├── generated/           # Arquivos gerados pelo Prisma
│   ├── libs/               # Bibliotecas e utilitários
│   ├── index.js            # Ponto de entrada da aplicação
│   └── routes.js           # Definição das rotas
├── prisma/
│   ├── migrations/         # Migrações do banco de dados
│   └── schema.prisma      # Schema do banco de dados
├── package.json
├── vercel.json            # Configuração do Vercel
└── README.md
```

## 🚀 Instalação

### Pré-requisitos
- Node.js (versão 18.0.0 ou superior)
- PostgreSQL
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/api-gerenciador-familiar.git
cd api-gerenciador-familiar
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

4. **Configure o banco de dados**
```bash
npx prisma migrate dev
npx prisma generate
```

5. **Execute a aplicação**
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/gerenciador_familiar"

# JWT
JWT_SECRET="seu_jwt_secret_aqui"

# Email (opcional)
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=587
EMAIL_USER="seu_email@gmail.com"
EMAIL_PASS="sua_senha_de_app"
```

## 📖 Uso da API

### Autenticação

A API utiliza JWT para autenticação. Para acessar rotas protegidas, inclua o token no header:

```http
Authorization: Bearer seu_jwt_token_aqui
```

### Exemplo de uso

```javascript
// Login
const response = await fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'usuario@email.com',
    password: 'senha123'
  })
});

const { token } = await response.json();

// Criar uma tarefa
const taskResponse = await fetch('/create-task', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    descricao: 'Comprar leite',
    status: false
  })
});
```

## 🔗 Endpoints

### Autenticação
- `POST /register` - Cadastro de usuário
- `POST /login` - Login de usuário

### Usuários
- `GET /users` - Listar todos os usuários
- `GET /user/:id` - Buscar usuário por ID
- `PUT /update-user/:id` - Atualizar usuário
- `PUT /update-user/:id/password` - Atualizar senha
- `DELETE /delete-user/:id` - Deletar usuário

### Famílias
- `POST /create-family` - Criar família
- `POST /family/:familyId/invite` - Convidar membro
- `PATCH /family/invitations/respond` - Responder convite
- `GET /family/invitations` - Listar convites pendentes
- `GET /family/:familyId/members` - Listar membros da família
- `GET /families` - Listar famílias do usuário

### Tarefas
- `POST /create-task` - Criar tarefa
- `GET /tasks` - Listar todas as tarefas
- `GET /tasks/:id` - Listar tarefas por usuário
- `PUT /update-task/:id` - Atualizar tarefa
- `DELETE /delete-task/:id` - Deletar tarefa

### Veículos
- `POST /create-vehicle` - Cadastrar veículo
- `GET /vehicles` - Listar veículos
- `GET /vehicle/:id` - Listar veículos por usuário
- `PUT /update-vehicle/:id` - Atualizar veículo
- `DELETE /delete-vehicle/:id` - Deletar veículo

### Manutenções
- `POST /vehicle/:id/maintenance` - Registrar manutenção
- `GET /vehicle/:id/maintenance` - Listar manutenções
- `PUT /maintenance/:id` - Atualizar manutenção
- `DELETE /maintenance/:id` - Deletar manutenção

### Listas de Compras
- `POST /create-list` - Criar lista de compras
- `GET /lists` - Listar listas
- `PUT /update-list/:id` - Atualizar lista
- `DELETE /delete-list/:id` - Deletar lista
- `POST /add-item-to-list` - Adicionar item à lista
- `GET /list-items/:listaId` - Listar itens da lista
- `PATCH /update-list-items/:listId` - Marcar item como comprado

### Atividades
- `GET /activities` - Listar últimas atividades
- `GET /activities/:userId` - Listar atividades do usuário

## 🚀 Deploy

O projeto está configurado para deploy no Vercel:

1. **Conecte seu repositório ao Vercel**
2. **Configure as variáveis de ambiente no painel do Vercel**
3. **O deploy será feito automaticamente a cada push**

### Configuração do Vercel

O arquivo `vercel.json` já está configurado para:
- Usar Node.js como runtime
- Redirecionar todas as rotas para o arquivo principal
- Build automático

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**LHS** - [GitHub](https://github.com/seu-usuario)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
