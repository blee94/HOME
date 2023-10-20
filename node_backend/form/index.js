const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/getForm', function (req, res) {
  console.log(req.query);
  res.render('result', {
    title: 'post 결과',
    userInfo: req.query,
  });
});

app.post('/postForm', function (req, res) {
  console.log(req.body);
  res.render('result', {
    title: 'post 결과',
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});