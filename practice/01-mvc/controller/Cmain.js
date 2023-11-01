exports.main = (req, res) => {
  res.render('index');
  console.log(req.query);
};

exports.submit = (req, res) => {
  res.send(req.body);
};

exports.success = (req, res) => {
  res.render('success');
};
