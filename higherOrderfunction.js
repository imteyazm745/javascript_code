function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}
const innerFunction = alertThenReturn();
innerFunction();
// alerts 'Message 2!'

alertThenReturn()();
// alerts 'Message 1!' then alerts 'Message 2!'
