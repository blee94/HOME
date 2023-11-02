function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mult(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 500);
  });
}
add(3, 4)
  .then(function (result) {
    console.log(result);
    return mult;
  })
  .then(function (result) {
    console.log(result);
  });
