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

exports.getEmails = (req, res) => {
  user.getEmails((result) => {
    console.log('Cmain.js: ', result);
    res.render('user', { data: result });
  });
};
