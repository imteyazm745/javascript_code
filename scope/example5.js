let n = 8;

function functionOne() {
  let n = 9;

  function functionTwo() {
    let n = 10;
    console.log(n);  // 10
  }

  functionTwo();

  console.log(n);  // 9
}

functionOne();

console.log(n);  // 8
