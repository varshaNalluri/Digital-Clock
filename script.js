const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const seconds = document.querySelector(".seconds");
const monthName = document.querySelector(".month-name");
const dayName = document.querySelector(".day-name");
const date = document.querySelector(".date");
const AMPM = document.querySelector(".am-pm");

var Hour24Format = true;

function updateTime() {
    var d = new Date();

    // Update hours, minutes, seconds
    let hour = d.getHours();
    if (!Hour24Format && hour > 12) {
        hour = hour - 12;
    }
    hours.innerText = hour < 10 ? "0" + hour : hour;
    mins.innerText = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    seconds.innerText = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

    // Update date
    date.innerText = d.getDate();
    
    // Update month and day names
    convertMonth(d.getMonth());
    convertDay(d.getDay());
    
    // Update AM/PM format
    formatAMPM(d.getHours());
}

function convertMonth(month) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    monthName.innerText = months[month];
}

function convertDay(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayName.innerText = days[day];
}

function formatAMPM(hour) {
    var ampm = hour >= 12 ? 'PM' : 'AM';
    AMPM.innerText = ampm;
}

function showFormatOption() {
    const format = document.querySelector(".format");
    var displaySetting = format.style.display;
    format.style.display = displaySetting === 'none' ? 'flex' : 'none';
}

function toggle24HourFormat() {
    const checkBox = document.getElementById("checkbox");
    Hour24Format = checkBox.checked;
    updateTime(); // Update the clock immediately when toggling format
}

// Update the time every second
setInterval(updateTime, 1000);

// Run once at the beginning to set the initial time
updateTime();
