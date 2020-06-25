const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
function runClock() {
  var date = new Date();
  console.log(date);

  let hr = date.getHours();
  let minute = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour "+hr+" minute "+minute+" seconds "+sec);

  let hrposition = (hr*360/12)+(minute*(360/60)/12);
  let minposition = (minute*360/60)+(sec*(360/60)/60);
  let secposition = sec*360/60;

  HOURHAND.style.transform = "rotate("+hrposition+"deg)"
  MINUTEHAND.style.transform = "rotate("+minposition+"deg)"
  SECONDHAND.style.transform = "rotate("+secposition+"deg)"
}

let interval = setInterval(runClock,1000);
