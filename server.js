const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/form-submit', (req, res) => {
  const formData = req.body;
  console.log(formData);
  // здесь можно добавить код для обработки данных формы
  res.send('Данные формы успешно отправлены на сервер');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});