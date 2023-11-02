const fruits = ['apple', 'banana', 'melon', 'orange'];
const [fruit1, fruit2, fruit3, fruit4, fruit5 = 'blueberry'] = fruits;

console.log(fruit1);
console.log(fruits);
console.log(fruit5);

const order = {
  first: 'wake up',
  second: 'stand up',
  third: 'take a shower',
  fourth: 'get out',
};
console.log(order);

const { first, second, third, fourth, fifth = first } = order;

console.log(first, fourth);
console.log(fifth);

let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x);

const veges = ['tomato', 'cucumber', 'lettuce', 'brocoli'];

const food = [...veges, ...fruits];
console.log(food);
console.log(...veges);
console.log(fruits, ...veges);

const profile = {
  name: 'blee',
  gender: 'male',
  age: 30,
};

const obj = {
  ...profile,
  test: 'test',
};
console.log(obj);

const values = [10, 20, 30, 40, 50];
function get(a, c, ...rest) {
  console.log('a=', a);
  console.log('c=', c);
  console.log('rest=', rest);
}

get(...values);
