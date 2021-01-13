// json 연습
const rabbit = {
  name: "torri",
  color: "white",
  birth: new Date(),
  jump() {
    console.log(`${this.name} is jumpping`);
  },
};

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(rabbit);
console.log(obj);
// JSON에 stringfy하는 순간 함수는 없어진다.
// 또한 birth는 넣기 전에는 new Date()라는 객체였는데, JSON타입으로 들어가는 순간 string으로 변환된다.
// 그러면 가져올 때 다시 '콜백함수'를 이용해서 Date타입으로 변환하면 된다. 한번 해보자
const obj_ = JSON.parse(json, (key, value) => {
  // 각각의 요소마다 콜백함수가 한 번씩 요청된다. 따라서 바로 밑의 출력문도 한번씩 호출된다.
  // 그리고 재밌는 것은 마지막에는 key =  , value : object로 한번 호출이 된다.
  console.log(`key : ${key} , value : ${value}`);
  return key === "birth" ? new Date(value) : value;
});
console.log(obj_);

// https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10
// 참고 영상
