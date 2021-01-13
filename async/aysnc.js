// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return "ellie";
}
// async를 함수 앞에 붙이면 자동으로 promise형태로 바꿔준다.
// --> 따라서 return "ellie"는 resolve("ellie")와 같다.
// 이렇게 다른 기능을 감싸는 API를 신테틱 슈가라고 한다.

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  // ms초가 지나면 resolve가 전달되는 Promise
}

async function getApple() {
  await delay(2000); // delay함수가 끝나면 사과를 return한다.
  // throw "error";
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

function getBanana_() {
  return delay(3000).then(() => "🍌");
}
// getBanana_와 getBanana는 같다.

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 병렬적으로 실행하기 위한 조치
  const apple = await applePromise;
  const banana = await bananaPromise;

  //   const apple =  applePromise;
  //   const banana =  bananaPromise;
  // 이렇게만 했으면 비효율적인 직렬 실행
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
// 이렇게 하면 병렬적으로 await를 나열하지 않아도 된다.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(
    fruits => fruits.join(" + ")
    // Promise.all은 Promise배열을 전달하게 되면 모든 promise배열이 병렬적으로 다 받아질 때까지 기다린다.
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
  // 어떤 것이든 상관 없이 먼저 끝나는 하나만 받으려면 race를 사용한다.
}

pickOnlyOne().then(console.log);
