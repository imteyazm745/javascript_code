  
const returnsAFunction = function () {
  return function () {
    console.log('Hello from inside a function');
  };
};

const newFunction = returnsAFunction();

newFunction();
//Hello from inside a function

returnsAFunction()();
//Hello from inside a function
