// Form Clears
function clearForm() {
    document.getElementById("myForm").reset();
}

// Calendar Date
const d = new Date();
let currentDay = d.getDate();
let currentMonth = d.getMonth();
let currentYear = d.getFullYear();

// Date at top of calendar
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[currentMonth];
document.getElementById("table-month").innerHTML = month + " " + currentYear;

const firstDay = new Date(currentYear, currentMonth, 1).getDay();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

