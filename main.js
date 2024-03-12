
let birthdayInput = document.getElementById('birthdayInput');

let calcBtn = document.getElementById('calcBtn');

let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');

console.log(years);
console.log(months);
console.log(days);

calcBtn.addEventListener('click', function(){

    const todayDate = new Date()
    const birthdayDate = new Date(birthdayInput.value)

    let todayDateYear = todayDate.getFullYear();
    let todayDateMonth = todayDate.getMonth() + 1;
    let todayDateDay = todayDate.getDate();

    let birthdayDateYear = birthdayDate.getFullYear();
    let birthdayDateMonth = birthdayDate.getMonth() + 1;
    let birthdayDateDay = birthdayDate.getDate();

   const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if(birthdayDateDay > todayDateDay){
      todayDateDay = todayDateDay + month[todayDateMonth - 1];
      todayDateMonth = todayDateMonth - 1;
    }

    if(birthdayDateMonth > todayDateMonth){
       todayDateMonth = todayDateMonth + 12;
       todayDateYear = todayDateYear - 1;
    }

    let d = todayDateDay - birthdayDateDay;
    let m = todayDateMonth - birthdayDateMonth;
    let y = todayDateYear - birthdayDateYear;

      years.innerHTML = y;
      months.innerHTML = m;
      days.innerHTML = d;

})