const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const deadline = document.querySelectorAll('.deadline-format h4');
const deadlineAll = document.querySelector('.deadline');
//console.log(deadlineAll);
const giveaway = document.querySelector('.giveaway');
//console.log(giveaway);
//console.log(deadline);
  let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
console.log(futureDate.getDate());

// getting info.
const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day];
//console.log(day);
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day}, ${date }${month} ${year} ${hour}:${mins}am`;




function remainingTime(){
const currentDate = new Date();
//console.log(currentDate);
const timeDifference = futureDate.getTime() - currentDate.getTime();
//console.log(timeDifference);

//Calculating Days, Hours , Minutes, Seconds
//days


const oneDay = 24*60*60*1000;
let days = timeDifference / oneDay;
days = Math.floor(days);
// console.log(days); 

//Hours
const oneHour = 60*60*1000;
// let hours = timeDifference / oneHour;
let hours = (timeDifference % oneDay) / oneHour;
hours = Math.floor(hours);
//console.log(hours);

//Minutes
const oneMin =60*1000;

let minutes = (timeDifference % oneHour) / oneMin;
minutes = Math.floor(minutes);
//console.log(minutes);

//seconds
const oneSecond =1000;

let seconds = (timeDifference % oneMin) / oneSecond;
seconds = Math.floor(seconds);
//console.log(seconds);



const info = [days, hours, minutes,seconds];
deadline.forEach(function(item,index){
      //console.log(item);
    
       item.textContent = info[index];
      if(item.textContent <10){
       item.textContent = `0${info[index]}`
     }
    
});
if(currentDate > futureDate){
  clearInterval(countdown);
  deadlineAll.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
}
}

let countdown = setInterval(remainingTime, 1000);



