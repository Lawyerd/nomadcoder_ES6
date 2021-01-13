// 정보를 제공하는 producer와 소비하는 consumer가 있다.
// promise의 상태는 promise가 만들어져서 우리가 지정한 operation이 작동 중일때는 pending상태이다.
// operation이 완료되어 끝나면 fulfilled 상태가 된다. 문제가 생기면 rejected 상태가 된다.

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // execute라는 콜백함수를 매개변수로 받는데,
  // 이때 들어가는 execute라는 함수도 두가지의 콜백함수를 매개변수로 받는다.
  // resolve는 실행이 정상적으로 되었을 때 실행하는 함수이고
  // reject는 실행이 잘못되었을 때 실행되는 콜백함수이다.
  // Producer가 생성한 값을 resolve나 reject로 내보내지 않으면 계속 pending상태이다.
  // 따라서 둘 중 하나를 꼭 사용해야 한다.

  console.log("doing something...");
  // 여기서 알 수 있는 점은 promise가 만들어지자마자 Promise안에 매개변수로 들어간 execute라는 콜백함수가 실행된다.
  // 따라서 만약 promise안에 네트워크 통신을 하는 기능을 넣었으면 불필요한 네트워킹이 발생할 수 있다.
  setTimeout(() => {
    resolve("success"); // 성공했으면 2초 뒤에 resolve 실행
    // reject(new Error("error EX")); // 보통 reject의 매개변수로는 Error객체를 넣는다.
  }, 2000);
});

// 2. Consumers: then, catch, finally
// producer가 생성한 data를 소비한다.
// producer에서 resolve함수의 매개변수로 success를 넣어줬고 이것을 consumer가 사용할 수 있다.
promise
  .then(value => {
    // then은 값이 잘 실행됐을 경우 받아오는 함수이다. 즉 resolve함수가 실행되었을 때 가져온다.
    console.log(value);
  }) // then이 똑같은 promise를 다시 return하기 때문에 그 return한 promise를 catch가 핸들링한다.
  .catch(error => {
    console.log(error); // 실패한 경우, 즉 error를 핸들링 한다.
  })
  .finally(() => {
    console.log("finally");
  }); // 인자를 받지 않고 마지막에 무조건 실행되는 함수이다.

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        //reject(new Error(`error! ${hen} => 🥚`))
        resolve(`${hen} => 🥚`),
      1000
    );
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
