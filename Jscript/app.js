//import stringify from "postcss/lib/stringify";
//import { rooms } from "../Data/data.js";

//const { document } = require("postcss");

// import { Splide } from "../node_modules/@splidejs/splide/dist/js";
// import {TypeIt  } from "../node_modules/typeit/dist/index.umd";

const mnb = document.querySelector(".nav-menu-btn");
const mnl = document.querySelector(".mobile-nav-links");
const heda = document.querySelector(".header");
const navContainer = document.querySelector(".nav-container");

const pageLoad = document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 3, // Number of items per row
    perMove: 1, // Moves in sets of 3
    gap: "20px",
    autoplay: true,
    pagination: false,
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 2 },
      480: { perPage: 1 },
    },
  }).mount();
});

function DoSomething() {
  setTimeout(() => {
    new TypeIt("#hero", {
      strings:
        "Welcome to our meticulously designed rooms, where luxury and comfort converge to create a memorable stay.",
      speed: 40,
      loop: false,
      waitUntilVisible: true,
      cursor: false,
    }).go();
  }, 5000);
}

function DoSomething1() {
  setTimeout(() => {
    new TypeIt("#hero", {
      strings:
        "Welcome to our meticulously designed rooms, where luxury and comfort converge to create a memorable stay.",
      speed: 40,
      loop: false,
      cursor: false,
      waitUntilVisible: true,
    }).go();
  }, 2200);
}

window.addEventListener("DOMContentLoaded", () => {
  detectScrollDirection();
  startFun();
  setTimeout(() => {
    const addText = document.querySelector("#add-text");

    addText.innerHTML += `
 <div class="hotelAnima text-center pb-10 text-white text-4xl font-[Times]
                                  animate__animated animate__fadeInDownBig animate__delay-5 
                                  animate__slower">
           E-HOTEL AND LUXURY IS THE BEST FOR YOU !

          </div>

          <p id="hero" class="pb-10 text-center hidden lg:block text-white text-2xl font-extralight">
           
          </p>

          <p class="mbAnima pb-10 text-center lg:hidden block text-white 
          animate__animated animate__zoomIn  
                                  animate__slower text-2xl font-extralight ani">
          Welcome to our meticulously designed rooms, where luxury and comfort converge to create a memorable stay. 
          </p>



          <div class=" place-items-center grid">
            <button class="bookNow flex justify-center items-center 
                         animate__animated animate__fadeInUpBig
                         animate__delay-5 
                                  animate__slower
                            bg-gradient-to-r from-green-950 via-[green] to-green-950 
                         rounded py-2 px-9 text-white border border-[white]">
              <span class="animate-pulse font-extralight">Book Now</span>
            </button>
          </div>

`;
  }, 2000);

  DoSomething();
});

function toggleAnimateJs() {
  const hotelAnima = document.querySelector(".hotelAnima");
  const mbAnima = document.querySelector(".mbAnima");
  const Booknow = document.querySelector(".bookNow");

  hotelAnima.classList.toggle("animate__fadeInDownBig");
  mbAnima.classList.toggle("animate__zoomIn");
  Booknow.classList.toggle("animate__fadeInUpBig");
}

function startFun() {
  setInterval(() => {
    toggleAnimateJs();
  }, 10000);

  setInterval(() => {
    document.querySelector("#hero").innerHTML = "";
  }, 20000);

  setInterval(() => {
    DoSomething1();
  }, 20500);
}

function detectScrollDirection() {
  let lastScrollTop = window.scrollY;

  window.addEventListener("scroll", function () {
    let currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      navContainer.classList.remove("fixed")
      heda.classList.remove("fixed");
     setTimeout(() => {
       heda.classList.remove("*:bg-[#1F2D0E]");

     }, 500);
      console.log("Scrolling Down");
      closeMobileNav()
    } else if (currentScrollTop < lastScrollTop) {
      navContainer.classList.add("fixed");
      heda.classList.add("*:bg-[#1F2D0E]");
      heda.classList.add("fixed");
      console.log("Scrolling Up");
    }
        lastScrollTop = currentScrollTop;
        setTimeout(() => {
          const cotana = document.querySelector(".cotana");
          cotana.classList.add("h-[155px]");
          
      }, 60000);

  

  
  });
}

const yesBtn = document.querySelector(".yesHelp");
const noBtn = document.querySelector(".noHelp");

yesBtn.onclick = sayYes;
noBtn.onclick = sayN0;

function sayN0() {
  const cotana = document.querySelector(".cotana");
  cotana.classList.remove("h-[155px]");
  
}
function sayYes() {
  const cotana = document.querySelector(".cotana");
  alert('Coming Soon')
 cotana.classList.remove("h-[155px]");
  
}




function closeMobileNav() {
  setTimeout(() => {
    mnl.classList.remove("h-[450px]");
    mnb.classList.remove("bg-[green]");
  }, 1500);
}
mnb.addEventListener("click", () => {
  mnl.classList.toggle("h-[450px]");
  mnb.classList.toggle("bg-[green]");
  mnl.classList.add("*:bg-[#1F2D0E]");
});
heda.addEventListener("mouseleave", closeMobileNav);

function b2t() {
  scrollTo({ top: 0, behavior: "smooth" });
}
//back2Top.addEventListener("click", b2t);

// document.body.onload = setTimeout(pageScroll(), 500);

// function pageScroll() {
//   window.scrollBy(0, 50);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   new Glide(".glide", {
//     type: "carousel",
//     startAt: 0,
//     perView: 1,
//     autoplay: 3000, // Auto-play every 3 seconds
//   }).mount();
// });

//new Accordion(".accordion-container");

const closeModal = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal-container");

const form = document.querySelector("#news-blog-form");
form.addEventListener("submit", (e) => {
  const button = document.querySelectorAll(".news-blog-btn");
  const email = document.querySelector(".news-blog-email");
  const error = document.querySelector(".news-blog-error-msg");
  const success = document.querySelector(".news-blog-success-msg");
  const successPage = document.querySelector(".success-page");
  const subscriptionPage = document.querySelector(".subscription-page");

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  e.preventDefault();

  let isValid = true;

  if (email.value === "") {
    error.innerHTML = "Email is Required";
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    error.innerHTML = "Invalid Email";
    isValid = false;
  } else {
    successCountDown();
    success.innerHTML = "Subscription Successful";

    subscriptionPage.classList.add("hidden");
    successPage.classList.remove("hidden");
    for (const eachButton of button) {
      eachButton.setAttribute("disabled", "disabled");
    }

    isValid = true;
  }

  email.onfocus = function cls() {
    error.innerHTML = "";
    success.innerHTML = "";
  };
});

closeModal.onclick = closeNewsletter;
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    showNewsletter();
  }, 20000);
});

function closeNewsletter() {
  modal.classList.add("hidden");
}

function showNewsletter() {
  modal.classList.remove("hidden");
}

function successCountDown() {
  const countDownButton = document.querySelector("#countDownButton");

  let countDown = 10;
  let intervalID = setInterval(() => {
    countDown--;
    countDownButton.innerHTML = `This will close after ${countDown}s`;

    if (countDown <= 0) {
      clearInterval(intervalID);
      document.querySelector(".modal-container").classList.add("my-element");
      myElement();
    }
  }, 1000);
}

//How It Works
//You first create an interval using setInterval(), which runs a function repeatedly at a specified time interval.
//setInterval() returns an ID (a numeric identifier).
//You pass this ID to clearInterval() to stop the interval.

/*
let input = document.querySelector('#range')
input.addEventListener('input', () => {
  let R = input.value
let speed = R;
  let interval = setInterval(function () {
  window.scrollBy(0, `${speed}`);
  }, 0.005);
})
*/

/*
anime({
  targets: ".box", // Target element
  translateX: 250, // Move 250px to the right
  rotate: "1turn", // Rotate 360 degrees
  duration: 2000, // Animation duration in ms
  easing: "easeInOutQuad", // Smooth animation curve
});
*/

function myElement() {
  const elements = document.querySelectorAll(".my-element");
  for (const each of elements) {
    each.classList.add(
      "animate__animated",
      "animate__fadeOut",
      "animate__slower"
    );

    each.addEventListener("animationend", () => {
      each.classList.add("hidden");
    });
  }
}

// function edu(){
//   console.log("Enu is my name")
// }
//edu()
// let edu = function(){
//   console.log("Enu is my name")
// }
// edu()
let edu = (a, b, c) => {
  console.log(a + b + c);
};
edu(2, 3, 5);

let myName = "Onu Emmanuel";
console.log(myName);

// const breadcrumb = document.getElementById("breadcrumb");
// const pathArray = window.location.pathname.split("/").filter(Boolean);

// let breadcrumbHTML = `<li><a href="/" class="text-blue-600 hover:underline">Home</a></li>`;

// let path = "";
// pathArray.forEach((segment, index) => {
//   path += `/${segment}`;
//   breadcrumbHTML += `
//     <li>
//       <span class="text-gray-500">/</span>
//     </li>
//     <li>
//       ${index === pathArray.length - 1
//         ? `<span class="text-gray-700 font-semibold">${segment.replace(/-/g, " ")}</span>`
//         : `<a href="${path}" class="text-blue-600 hover:underline">${segment.replace(/-/g, " ")}</a>`}
//     </li>
//   `;
// });

// breadcrumb.innerHTML = breadcrumbHTML;

  