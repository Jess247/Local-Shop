const currentYear = document.querySelector('#currentYear');

let date = new Date();
let year = date.getFullYear();

currentYear.textContent = year;