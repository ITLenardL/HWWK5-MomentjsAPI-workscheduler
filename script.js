// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
// Text hour var
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;
// var hourString = $(".hour").text().split(" ");

// Date and Hour

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '+ momentNow.format('dddd').substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

console.log("Current Hour " + hour);
var init9 = JSON.parse(localStorage.getItem("09:00 am"));
nineAm.val(init9);

var init10 = JSON.parse(localStorage.getItem("10:00 am"))
tenAm.val(init10);

var init11 = JSON.parse(localStorage.getItem("11:00 am"))
elevenAm.val(init11);

var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
twelvePm.val(init12);

var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
onePm.val(init1);

var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
twoPm.val(init2);

var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
threePm.val(init3);

var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
fourPm.val(init4);

var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
fivePm.val(init5);

var init6 = JSON.parse(localStorage.getItem("06:00 pm"))
sixPm.val(init6);

var init7 = JSON.parse(localStorage.getItem("07:00 pm"))
sevenPm.val(init7);
} 

function background () {
    $(".form-control").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    if (hour > timeTest) {
        $(this).addClass("past");
    } else if (hour < timeTest) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
    });
}

$(document).ready(function(){
initPage()
background()

  // Buttons (save to Local Storage)
$(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

})
  // Button for clear the day
$("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
}) 

});