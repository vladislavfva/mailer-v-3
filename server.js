const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/form-data', (req, res) => {
  const formData = req.body;
  console.log(formData); // Вывод полученных данных в консоль

  // Ваш код обработки данных формы здесь

  res.send('Данные успешно отправлены');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});