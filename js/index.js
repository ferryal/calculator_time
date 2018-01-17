let buttonToday = document.querySelector('#btn-today');
let buttonTodayKorea = document.querySelector('#btn-today-korea');
let buttonTodayArab = document.querySelector('#btn-today-arab');
var date = new Date();
// var message
// var duration

function getday() {
  return date;
}

function getmonth() {
  return date.getMonth();
}

function gethours() {
  return date.getHours();
}

// function message(message, duration) {
//   Materialize.toast(message, duration);
// }
function todayKorea() {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var temp;
  temp = date.toLocaleDateString('ko-KR', options);
  document.getElementById('result').innerHTML = `Today Korea : ${temp}`;
}

function todayArab() {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var temp;
  temp = date.toLocaleDateString('ar-EG', options);
  document.getElementById('result').innerHTML = `Today Arab : ${temp}`;
}

function todayIndo() {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var temp;
  temp = date.toLocaleDateString('en-ID', options);
  document.getElementById('result').innerHTML = `Today Arab : ${temp}`;
}

function today() {
  var dayFix = getday()
  var monthFix = getmonth()
  var hoursFix = gethours()

  document.getElementById('result').innerHTML = `Today ${dayFix}, Month ${monthFix}, Hours ${hoursFix}`
}
buttonToday.addEventListener('click', today);
buttonTodayKorea.addEventListener('click', todayKorea);
buttonTodayArab.addEventListener('click', todayArab);