const canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");

let alertBtn = document.querySelector(".alert");
let fillBtn = document.querySelector(".fill");

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function expensiveOperation() {
  ctx.fillStyle = "rgba(255,255,255, 0/3)"; // 원의 색상
  ctx.beginPath();
  ctx.arc(
    random(0, canvas.width), // 0 ~ 가로 최대 길이의 난수
    random(0, canvas.height), // 세로 최대 길이
    50, // 원의 지름 길이
    degToRad(360),
    degToRad(0), // 몇도?
    true // 상현달, 하현달
  );
  ctx.fill();
}

fillBtn.addEventListener("click", expensiveOperation);

alertBtn.addEventListener("click", () => alert("You clicked me!"));
