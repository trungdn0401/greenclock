/*==================== ANALOG CLOCK ====================*/
var hands = [];
hands.push(document.querySelector('#secondhand > *'));
hands.push(document.querySelector('#minutehand > *'));
hands.push(document.querySelector('#hourhand > *'));

var cx = 100;
var cy = 100;

function shifter(val) {
  return [val, cx, cy].join(' ');
}

var date = new Date();
var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
var minuteAngle = 360 * date.getMinutes() / 60;
var secAngle = 360 * date.getSeconds() / 60;

hands[0].setAttribute('from', shifter(secAngle));
hands[0].setAttribute('to', shifter(secAngle + 360));
hands[1].setAttribute('from', shifter(minuteAngle));
hands[1].setAttribute('to', shifter(minuteAngle + 360));
hands[2].setAttribute('from', shifter(hoursAngle));
hands[2].setAttribute('to', shifter(hoursAngle + 360));

for (var i = 1; i <= 12; i++) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  el.setAttribute('x1', '100');
  el.setAttribute('y1', '30');
  el.setAttribute('x2', '100');
  el.setAttribute('y2', '40');
  el.setAttribute('transform', 'rotate(' + (i * 360 / 12) + ' 100 100)');
  el.setAttribute('style', 'stroke: #ffffff;');
  document.querySelector('svg').appendChild(el);
}

/*==================== CLOCK & DATE TEXT ====================*/
const textHour = document.getElementById('text-hour');
const textMinutes = document.getElementById('text-minutes');
const textAmPm = document.getElementById('text-ampm');
const dateWeek = document.getElementById('date-day-week');
const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYear = document.getElementById('date-year');

const clockText = () => {
  let date = new Date();

  let hh = date.getHours();
  let ampm;
  let mm = date.getMinutes();
  let day = date.getDate();
  let dayweek = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  // We change the hours from 24 to 12 hours and establish whether it is AM or PM
  if (hh >= 12) {
    hh = hh - 12
    ampm = 'PM'
  } else {
    ampm = 'AM'
  };

  // We detect when it's 0 AM and transform to 12 AM
  if (hh == 0) {
    hh = 12
  };

  // Show a zero before hours
  if (hh < 10) {
    hh = `0${hh}`
  };

  // Show time
  textHour.innerHTML = `${hh}:`

  // Show a zero before the minutes
  if (mm < 10) {
    mm = `0${mm}`
  };

  // Show minutes
  textMinutes.innerHTML = mm;

  // Show am or pm
  textAmPm.innerHTML = ampm;

  // If you want to show the name of the day of the week
  let week = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
  ];

  // We get the months of the year and show it
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  // We show the day, the month and the year
  dateDay.innerHTML = day;
  dateWeek.innerHTML = `${week[dayweek]}`
  dateMonth.innerHTML = `${months[month]},`
  dateYear.innerHTML = year;
}
setInterval(clockText, 1000) // 1000 = 1s