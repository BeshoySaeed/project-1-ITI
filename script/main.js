// navBar
let beside = document.querySelector(".downBar");
let toggle = document.querySelector(".fa-chart-bar");
let besideShow = false;

// click nav-icon
toggle.addEventListener("click", () => {
  if (!besideShow) {
    beside.style.opacity = "1";
    toggle.classList.add("fa-fade");
    besideShow = true;
  } else {
    beside.style.opacity = "0";
    toggle.classList.remove("fa-fade");
    besideShow = false;
  }
});

// change the color of bars

let itemsList = document.querySelectorAll(
  ".nav .downBar details .some-data h3 "
);
console.log(itemsList);
let colorList = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
  "purple",
  "teal",
  "brown",
  "gray",
];
let i = 0;

itemsList.forEach((item) => {
  item.addEventListener("mouseover", () => {
    if (i >= colorList.length - 1) {
      i = 0;
    } else {
      i++;
    }
    item.style.backgroundColor = colorList[i];
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = " rgb(37, 37, 37)";
  });
});

// ------------ word change -----------------------------

let firstWordChange = document.querySelector(
  ".nav .downBar .changing-text .first-one "
);
let wordChangeWithColor = document.querySelector(
  ".nav .downBar .changing-text .second-one"
);

let changeWordBtn = [
  "Breaking news",
  "&hearts; heart",
  "listen live",
  "Option",
];
let changeableWordWithColor = [
  "what's for sale",
  "what's worth",
  "be property prepared",
];

let x = 0;
// y for loop long words
let y = 0;
// z for loop colors
let z = 0;
let shortInterval = setInterval(() => {
  if (x >= changeWordBtn.length - 1) {
    x = 0;
  } else {
    x++;
  }
  firstWordChange.innerHTML = changeWordBtn[x];
}, 1500);
let slongInterval = setInterval(() => {
  if (y >= changeableWordWithColor.length - 1) {
    y = 0;
  } else {
    y++;
  }
  if (z >= colorList.length - 1) {
    z = 0;
  } else {
    z++;
  }
  wordChangeWithColor.innerHTML = changeableWordWithColor[y];
  wordChangeWithColor.style.color = colorList[z];
}, 2500);

// ---------------search icon

let searchIcon = document.querySelector(".fa-magnifying-glass");
let inputField = document.querySelector(".searchInput");
let isItDown = false;

searchIcon.addEventListener("click", () => {
  if (isItDown) {
    inputField.classList.remove("inputDown");
    searchIcon.classList.remove("fa-bounce");
    isItDown = false;
  } else {
    inputField.classList.add("inputDown");
    searchIcon.classList.add("fa-bounce");
    isItDown = true;
  }
});

// -------------------Start watch

// select the html elements

let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let day = document.querySelector(".day-date");
let month = document.querySelector(".month-date");
let year = document.querySelector(".year-date");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  let ourNewDate = new Date();

  seconds.innerHTML = ourNewDate.getSeconds();
  minutes.innerHTML = ourNewDate.getMinutes();
  hours.innerHTML = ourNewDate.getHours();
  day.innerHTML = `Day : ${weekDays[ourNewDate.getDay()]}`;
  month.innerHTML = `month : ${months[ourNewDate.getMonth()]}`;
  year.innerHTML = `Year : ${ourNewDate.getFullYear()}`;
}, 1000);
console.log(ourNewDate);
