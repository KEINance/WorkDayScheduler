var hourBlock = document.querySelector('.container');
var todaysDate = document.querySelector('#currentDay');

$(document).ready(function () {

// show current date and time
var hour = dayjs().format('dddd, MMMM D, YYYY h:mm');
todaysDate.textContent = hour;

// save btn clicker functionality for local storage
$('.saveBtn').on('click', function () {
  var userText = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  
  localStorage.setItem(time, userText);
});

// tracker for hours and past, present and future sorter for colour blocks
function timeSorter() {
  var currentTime = dayjs().hour();

//loop hour blocks
$('.time-block').each(function() {
  var timeBlock = parseInt($(this).attr('id').split('hour')[1]);

// colour block changes based on current time app is being used
if (timeBlock < currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
} else if (timeBlock === currentTime) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
} else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
}})};
  
//local storage holders
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


timeSorter();
});
