const express = require('express');
const PORT = 3000;

const port = process.env.PORT || PORT;

const app = express();

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Сервер запущен на  http://localhost:${port}`);
});
