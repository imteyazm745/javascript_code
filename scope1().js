var globalNumber = 5;

function globalIncrementer() {
  const localNumber = 10;

  globalNumber += 1;
  return globalNumber;
}
console.log(globalIncrementer());
// 6

console.log(globalIncrementer());
// 7

console.log(globalIncrementer());
// 8

console.log(localNumber);

// ReferenceError: localNumber is not defined
