const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    console.log(idx);
    console.log(arr);
    console.log(idx % size);
    console.log(item);
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  },[]);
};

chunk(['a', 'b', 'c', 'd'], 2);
