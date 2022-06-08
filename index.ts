const express = require('express');
const path = require('path');
const PORT = 4000;

const port = process.env.PORT || PORT;

const app = express();

app.use(express.static('dist/legacy'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/legacy/index.html'));
});
app.listen(port, () => {
  console.log(`Сервер запущен на  http://localhost:${port}`);
});
