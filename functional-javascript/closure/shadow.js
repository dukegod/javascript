var shadows = 0;

function argShow(shadows) {
  console.log(`shadows: ${shadows}`);
  return ['value is ', shadows].join(',');
}

var t = argShow();
console.log(t)

var t2 =argShow()
console.log(t2)
