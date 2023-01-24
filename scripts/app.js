"use strict";
const CarsStatic = cars.slice(0, 6);
localStorage.setItem("allCars", JSON.stringify(cars));

CarsStatic.forEach((car) => {
  const card = document.createElement("div");
  card.setAttribute("class", "cars-card");
  card.innerHTML = `
    <div class="card-top">
    <h3 class="car-model">${car.car_model}</h3>
    <span class="car-style">${car.car_style}</span>
    </div>
    <img src="${car.car_img}" alt="${car.car_model} img" class="car-img">
    <div class="card-body">
    <p class="car-property">${car.seat_num} Seats</p>
    <p class="car-property">${car.automatic}</p>
    <p class="car-property">${car.year_num} years</p>
    <p class="car-property">1-lit/${car.lit_num}</p>
    </div>
    `;

  $(".root").appendChild(card);
});

const carTypes = [];
cars.map((e) => {
  if (!carTypes.includes(e.car_type)) {
    carTypes.push(e.car_type);
  }
});

carTypes.forEach((e) => {
  const typeCard = document.createElement("button");
  typeCard.setAttribute("type", "button");
  typeCard.setAttribute("class", `car-type ${e}`);
  typeCard.setAttribute("data-category", e);
  typeCard.setAttribute("value", e);
  typeCard.innerHTML = `
    ${e}
    `;

  $(".car-types").appendChild(typeCard);
});

const items = document.querySelectorAll(".car-type");
$(".car-types").addEventListener("click", ({ target }) => {
  for (const item of items) {
    item.classList.toggle("car-type-active", target === item);
  }
});

$(".ViewAllCars").addEventListener("click", (e) => {
  let viewAllcars = JSON.parse(localStorage.getItem("allCars"));
  e.preventDefault();
  viewAllcars.forEach((car) => {
    const card = document.createElement("div");
    card.setAttribute("class", "cars-card");
    card.innerHTML = `
    <div class="card-top">
    <h3 class="car-model">${car.car_model}</h3>
    <span class="car-style">${car.car_style}</span>
    </div>
    <img src="${car.car_img}" alt="${car.car_model} img" class="car-img">
    <div class="card-body">
    <p class="car-property">${car.seat_num} Seats</p>
    <p class="car-property">${car.automatic}</p>
    <p class="car-property">${car.year_num} years</p>
    <p class="car-property">1-lit/${car.lit_num}</p>
    </div>
    `;

    $(".root").appendChild(card);
  });
  e.target.style.display = "none";
  $(".HideAllCars").style.display = "block";
});

// saveSHowAllCars()
// function saveSHowAllCars(){
//      let viewAllcars = JSON.parse(localStorage.getItem("allCars"));
//      viewAllcars.forEach((car) => {
//        const card = document.createElement("div");
//        card.setAttribute("class", "cars-card");
//        card.innerHTML = `
//     <div class="card-top">
//     <h3 class="car-model">${car.car_model}</h3>
//     <span class="car-style">${car.car_style}</span>
//     </div>
//     <img src="${car.car_img}" alt="${car.car_model} img" class="car-img">
//     <div class="card-body">
//     <p class="car-property">${car.seat_num} Seats</p>
//     <p class="car-property">${car.automatic}</p>
//     <p class="car-property">${car.year_num} years</p>
//     <p class="car-property">1-lit/${car.lit_num}</p>
//     </div>
//     `;

//        $(".root").appendChild(card);
//      });
// }
// saveSHowAllCars();

$(".HideAllCars").addEventListener("click", (e) => {
  e.preventDefault();
  $(".root").innerHTML = "";
  const CarsStatic = cars.slice(0, 6);
  CarsStatic.forEach((car) => {
    const card = document.createElement("div");
    card.setAttribute("class", "cars-card");
    card.innerHTML = `
    <div class="card-top">
    <h3 class="car-model">${car.car_model}</h3>
    <span class="car-style">${car.car_style}</span>
    </div>
    <img src="${car.car_img}" alt="${car.car_model} img" class="car-img">
    <div class="card-body">
    <p class="car-property">${car.seat_num} Seats</p>
    <p class="car-property">${car.automatic}</p>
    <p class="car-property">${car.year_num} years</p>
    <p class="car-property">1-lit/${car.lit_num}</p>
    </div>
    `;

    $(".root").appendChild(card);
  });
  e.target.style.display = "none";
  $(".ViewAllCars").style.display = "block";
});

const slidesContainer = document.querySelector(".CarouselWrapper");
const slide = document.querySelector(".carousel-item");
const prevButton = document.querySelector(".slide-arrow-prev");
const nextButton = document.querySelector(".slide-arrow-next");

nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

let item = document.querySelector(".car-type");
$(".car-types").addEventListener("click", (e) => {
  for (const item of items) {
    filterCars(e);
  }
});
function filterCars(e) {
  e.preventDefault();
  $(".root").innerHTML = "";
  cars.forEach((car) => {
    if (car.car_type == e.target.value) {
      const card = document.createElement("div");
      card.setAttribute("class", "cars-card");
      card.innerHTML = `
    <div class="card-top">
    <h3 class="car-model">${car.car_model}</h3>
    <span class="car-style">${car.car_style}</span>
    </div>
    <img src="${car.car_img}" alt="${car.car_model} img" class="car-img">
    <div class="card-body">
    <p class="car-property">${car.seat_num} Seats</p>
    <p class="car-property">${car.automatic}</p>
    <p class="car-property">${car.year_num} years</p>
    <p class="car-property">1-lit/${car.lit_num}</p>
    </div>
    `;
      $(".root").appendChild(card);
    } else {
    }
  });
}
$(".searchCars").addEventListener("change", (e) => {
  e.preventDefault();
  $(".root").innerHTML = "";
  cars.forEach((car) => {
    if (
      car.car_model.toLowerCase().includes(e.target.value.toLowerCase().trim())
    ) {
      const card = document.createElement("div");
      card.setAttribute("class", "cars-card");
      card.innerHTML = `
    <div class="card-top">
    <h3 class="car-model">${car.car_model}</h3>
    <span class="car-style">${car.car_style}</span>
    </div>
    <img src="${car.car_img}" alt="${car.car_model} img" class="car-img">
    <div class="card-body">
    <p class="car-property">${car.seat_num} Seats</p>
    <p class="car-property">${car.automatic}</p>
    <p class="car-property">${car.year_num} years</p>
    <p class="car-property">1-lit/${car.lit_num}</p>
    </div>
    `;

      $(".root").appendChild(card);
    }
  });
});

const slides = document.querySelectorAll(".Herowrapper");
let idx = 0;

function ChangeSlide() {
  if (idx > slides.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = slides.length - 1;
  }
  for (const slide of slides) {
    slide.style.transform = `translate(${-idx * 100}%   )`;
  }
}

$(".slide-hero-arrow-next").addEventListener("click", (e) => {
  idx++;
  resetInterval();
  ChangeSlide();
});
$(".slide-hero-arrow-prev").addEventListener("click", (e) => {
  idx--;
  resetInterval();
  ChangeSlide();
});

let interval = setInterval(run, 4000);

function run() {
  idx++;

  ChangeSlide();
}

function resetInterval() {
  clearInterval(interval);

  interval = setInterval(run, 4000);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $(".scrolTop").style.display = "block";
  } else {
    $(".scrolTop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(".scrolTop").addEventListener("click", () => {
  topFunction();
});

$("#mode").addEventListener("click", (e) => {
  localStorage.setItem(
    "Theme",
    JSON.stringify(
      e.target.classList.contains("lightmode") ? "darkmode" : "lightmode"
    )
  );

  if (e.target.classList.contains("darkmode")) {
    e.target.classList.remove("darkmode");

    let mode = JSON.parse(localStorage.getItem("Theme"));

    e.target.classList.add(mode);

    switch (mode) {
      case "lightmode":
        $("body").setAttribute("class", "active");
        break;
      case "darkmode":
        $("body").setAttribute("class", "default");
        break;
    }
  } else if (e.target.classList.contains("lightmode")) {
    e.target.classList.remove("lightmode");

    let mode = JSON.parse(localStorage.getItem("Theme"));

    e.target.classList.add(mode);

    switch (mode) {
      case "lightmode":
        $("body").setAttribute("class", "active");
        break;
      case "darkmode":
        $("body").setAttribute("class", "default");
        break;
    }
  }
});

function saveData() {
  if ($("#mode").classList.contains("darkmode")) {
    $("#mode").classList.remove("darkmode");

    let mode = JSON.parse(localStorage.getItem("Theme"));

    $("#mode").classList.add(mode);

    switch (mode) {
      case "lightmode":
        $("body").setAttribute("class", "active");
        break;
      case "darkmode":
        $("body").setAttribute("class", "default");
        break;
    }
  } else if ($("#mode").classList.contains("lightmode")) {
    $("#mode").classList.remove("lightmode");

    let mode = JSON.parse(localStorage.getItem("Theme"));

    $("#mode").classList.add(mode);

    switch (mode) {
      case "lightmode":
        $("body").setAttribute("class", "active");
        break;
      case "darkmode":
        $("body").setAttribute("class", "default");
        break;
    }
  }
}

saveData();

$("#ShowPassword").addEventListener("click", (e) => {
  if (e.target.classList.contains("shownow")) {
    e.target.classList.remove("shownow");
    e.target.classList.add("hidenow");
    $("#hidePassword").classList.remove("hidenow");
    $("#hidePassword").classList.add("shownow");

    $("#modalpasswordinput").type = "text";
  }
});
$("#hidePassword").addEventListener("click", (e) => {
  if (e.target.classList.contains("shownow")) {
    e.target.classList.remove("shownow");
    e.target.classList.add("hidenow");
    $("#ShowPassword").classList.remove("hidenow");
    $("#ShowPassword").classList.add("shownow");

    $("#modalpasswordinput").type = "password";
  }
});

$("#closemodal").addEventListener("click", () => {
  $(".modal-window").style.display = "none";
});
$(".login").addEventListener("click", () => {
  $(".modal-window").style.display = "block";
});


$(".hamburger").addEventListener('click', (e)=>{
  if($('.navbar').style.transform == "translateX(120%)"){
    $('.navbar').style.transform = "translateX(0)"
    e.target.classList.remove("bi-list");
    e.target.classList.add("bi-x");
  }else{
    $(".navbar").style.transform = "translateX(120%)";
    e.target.classList.remove("bi-x");
     e.target.classList.add("bi-list");
  }
});