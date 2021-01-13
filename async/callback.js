console.log(1);
setTimeout(print, 2000, 4);
setTimeout(() => console.log(2), 1000);
// 정리하자면 1초가 지난다음에 인자로 넣은 함수(방금 정의한 함수)를 다시 불러줘
//==> 'callback해줘'라고 해서 call back 함수이다.
console.log(3);

function print(num) {
  console.log(num);
}

// --------------------------------------------------------------
// 콜백도 두가지로 나뉜다.
// 언제 실행될지 모르는 asyn callback, 즉각적으로 실행하는 syn callback
// Synchronous callback
function printImmediately(print) {
  print(); // 매개변수로 받은 print가 함수일 것이라고 예상해서 print를 실행한다. 하지만 print가 함수인 것은 확정이 아니다.
}
printImmediately(() => console.log("hello"));
// Asynchronous callback
function printWithDelay(print, delay, string) {
  setTimeout(print, delay, string); // 마지막에 매개변수를 넣어준다.
}
printWithDelay(print, 3000, "Asyn");
