function isPure(params) {
  const A = 'ispure';
  return `${A}${params}`
}

function notPure(params) {
  const A = 'ispure';
  return `${A}${params}`
}

isPure(1);

notPure(1);
