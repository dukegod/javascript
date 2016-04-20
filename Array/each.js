var sum = 0;

[1, 2, 3, 4].forEach(function (item, index, array) {
  console.log(array[index] == item); // true
  sum += item;
});

console.log(sum);