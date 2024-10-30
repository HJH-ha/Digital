// alert("test"); 연결되었는지 테스트용
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const stopbtn = document.getElementById("stop");
// setInterval(함수, 시간(밀리세컨 1000이 1초))
// setInterval은 시간만큼 계에속 반복한다.

// e tInterval(함수, 시간), 주기작으로 시간뒤에 함수를 실했함
const timer = setInterval(() => {
  const date_now = new Date(); // 현재 날짜시간을 생성
  console.log(date_now);
  let hr = date_now.getHours(); // 시간
  let min = date_now.getMinutes(); // 분
  let sec = date_now.getSeconds(); // 초
  // const 는 상수로 안바껴짐. 변수사용 여기산 사용 안해도됨
  //10보다 작은 숫자는 앞에 0을 붙여줌
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  //계산된 시간, 분, 초를 각각 화면에 출력
  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = sec;
}, 1000);

//stop 버튼 누르면 timer 멈충
stopbtn.addEventListener("click", () => {
  clearInterval(timer);
  //멈추는 기능 clearInterval 사용하기위해 setInterval 이름 지정
});
