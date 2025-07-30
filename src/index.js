const express = require('express');
const cors = require('cors');

const app = express();
// const port = 3001;
const path = require('path');

app.use(cors());
app.use(express.json());

const routes = require('./routes');

app.use(routes)

app.use(express.static(path.join(__dirname, 'public')));

// app.listen(port, () => {
//   console.log(`API rodando na porta http://localhost:${port}`);
// })

module.exports = app;
