// Nav
(function () {
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
})();

// -------------------Start watch

// select the html elements
(function () {
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
})();

// start slider script

(function () {
  let imageSelector = document.querySelector(".slider-image");
  let sliderSection = document.querySelector(".slider");

  // select arrows

  let goLeftArrow = document.querySelector(".fa-left-long");
  let goRightArrow = document.querySelector(".fa-right-long");
  let pagination = document.querySelectorAll(".slider ul li ");

  let imageArr = [
    "../images/book1.jpeg",
    "../images/book2.webp",
    "../images/book3.avif",
    "../images/book4.gif",
  ];
  let counter = 0;

  goLeftArrow.addEventListener("click", () => {
    if (counter <= 0) {
      counter = imageArr.length - 1;
    } else {
      counter--;
    }
    imageSelector.src = imageArr[counter];
    pagination.forEach((e) => {
      e.classList.remove("active");
    });
    pagination[counter].classList.add("active");
  });
  goRightArrow.addEventListener("click", () => {
    if (counter >= imageArr.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    imageSelector.src = imageArr[counter];
    pagination.forEach((e) => {
      e.classList.remove("active");
    });
    pagination[counter].classList.add("active");
  });

  for (let i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener("click", () => {
      pagination.forEach((e) => {
        e.classList.remove("active");
      });
      pagination[i].classList.add("active");
      imageSelector.src = imageArr[i];
    });
  }

  goLeftArrow.addEventListener("mouseover", () => {
    goLeftArrow.classList.add("fa-beat");
  });
  goLeftArrow.addEventListener("mouseleave", () => {
    goLeftArrow.classList.remove("fa-beat");
  });
  goRightArrow.addEventListener("mouseover", () => {
    goRightArrow.classList.add("fa-beat");
  });
  goRightArrow.addEventListener("mouseleave", () => {
    goRightArrow.classList.remove("fa-beat");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1200) {
      console.log("hey");
      sliderSection.style.opacity = "1";
    } else {
      sliderSection.style.opacity = "0";
    }
  });
})();

// video

(function () {
  let videoSection = document.querySelector(".section-one");
  let videoPosition = 880;
  //  videoSection.getBoundingClientRect().top;
  let secondOne = document.querySelectorAll(".section-one")[1];

  window.addEventListener("scroll", () => {
    if (scrollY >= videoPosition - 750) {
      videoSection.style.opacity = "1";
      secondOne.style.opacity = "1";
    } else {
      videoSection.style.opacity = "0";
      secondOne.style.opacity = "0";
    }
  });
})();

// news interval section

(function () {
  let section = document.querySelector(".interval-news");

  console.log(section.getBoundingClientRect().top);

  let image = document.querySelector(".interva-images img");
  let imageArr = [
    "../images/news1.jpg",
    "../images/news2.jpg",
    "../images/news3.webp",
  ];
  let i = 0;
  console.log(image.src);
  setInterval(() => {
    if (i >= imageArr.length - 1) {
      i = 0;
    } else {
      i++;
    }
    image.src = imageArr[i];
  }, 2000);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1700) {
      section.style.opacity = "1";
    } else {
      section.style.opacity = "0";
    }
  });
})();

// arrow to top

let arrowTop = document.querySelector(".fa-plane-up");

arrowTop.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    arrowTop.style.display = "block";
  } else {
    arrowTop.style.display = "none";
  }
});
