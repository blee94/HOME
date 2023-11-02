exports.main = (req, res) => {
  res.render('index');
  console.log(req.query);
};
