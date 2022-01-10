// 시간의 초기값을 설정합니다.
let min = 0;
let sec = 0;
let ms = 0;

// 각 변수 별로 html에서 element를 가져오는 코드를 작성하세요 (*변수명을 수정하지 말아주세요)
const millisec = document.getElementById("millisec");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let timerIntervalID;

function add10ms() {
  ms++;
  if (ms >= 100) {
    sec++;
    ms -= 100;
  }
  if (sec >= 100) {
    min++;
    sec -= 100;
  }
}

function changeTimer() {
  minutes.innerText = min.toString().padStart(2, "0");
  seconds.innerText = sec.toString().padStart(2, "0");
  millisec.innerText = ms.toString().padStart(2, "0");
}

startBtn.addEventListener('click', () => {
  clearInterval(timerIntervalID);
  timerIntervalID = setInterval(() => {
    add10ms();
    changeTimer();
  }, 10);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerIntervalID);
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerIntervalID);
  ms = 0;
  min = 0;
  sec = 0;
  minutes.innerText = "00";
  seconds.innerText = "00";
  millisec.innerText = "00";
});
