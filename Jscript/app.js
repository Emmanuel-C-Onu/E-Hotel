const mnb = document.querySelector(".nav-menu-btn");
const mnl = document.querySelector(".mobile-nav-links");
const heda = document.querySelector(".header");
const nav = document.querySelector("nav");
const cotana = document.querySelector(".cotana");

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

const addText = document.querySelector("#add-text");
addText.innerHTML += `
          <div class="hotelAnima text-center mb-10 text-white text-4xl font-[Times]
                                  animate__animated animate__fadeInDownBig animate__delay-2 
                                  animate__slower">
           E-HOTEL AND LUXURY IS THE BEST FOR YOU !
          </div>
          <p class="typeHere my-10 text-center text-white text-2xl font-extralight"> </p>
          <div class=" place-items-center grid">
            <button class="bookNow flex justify-center items-center  
                         animate__animated animate__fadeInUpBig animate__delay-2 animate__slower
                         rounded py-2 px-9 text-white border border-[white]">
              <span class=" font-extralight">Book Now</span>
            </button>
          </div>
`;

document.addEventListener("DOMContentLoaded", function () {
  let text =
    "Welcome to our meticulously designed rooms, where luxury and comfort converge to create a memorable stay.";
  let demo = document.querySelector(".typeHere");

  let count = 0;

  function startTyping() {
    if (count < text.length + 200) {
      count++;
      demo.innerHTML = text.substring(0, count);
    } else {
      count = 0;
    }
    setTimeout(startTyping, 75);
  }
  startTyping();
});

let scrollTimeout;
window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    cotana.classList.add("h-[155px]");
  }, 60000);
});

const yesBtn = document.querySelector(".yesHelp");
const noBtn = document.querySelector(".noHelp");

yesBtn.onclick = sayYes;
noBtn.onclick = sayN0;

function sayN0() {
  cotana.classList.remove("h-[155px]");
}
function sayYes() {
  alert("Coming Soon");
  cotana.classList.remove("h-[155px]");
}

function closeMobileNav() {
  mnl.classList.remove("h-[450px]");
}
mnb.addEventListener("click", () => {
  mnl.classList.toggle("h-[450px]");
});

function b2t() {
  scrollTo({ top: 0, behavior: "smooth" });
}

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

  if (email.value === "") {
    error.innerHTML = "Email is Required";
  } else if (!emailRegex.test(email.value)) {
    error.innerHTML = "Invalid Email";
  } else {
    successCountDown();
    success.innerHTML = "Subscription Successful";
    subscriptionPage.classList.add("hidden");
    successPage.classList.remove("hidden");
    for (const eachButton of button) {
      eachButton.setAttribute("disabled", "disabled");
    }
  }

  email.onfocus = function cls() {
    error.innerHTML = "";
    success.innerHTML = "";
  };
});

closeModal.onclick = closeNewsletter;
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(showNewsletter, 60000);
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
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    nav.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "bg-[#1F2D0E]",
      "px-5"
    );
  } else {
    nav.classList.remove(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "bg-[#1F2D0E]",
      "px-5"
    );
  }
});

const cityContainer = document.querySelector(".city-container");
const lagos = document.querySelector(".lagos");
const abuja = document.querySelector(".abuja");
const ph = document.querySelector(".ph");
const owerri = document.querySelector(".owerri");

let count = 0;

function liveCount() {
  count++;
  if (count > 100) clearTimeout(intervalID);
  let intervalID = setTimeout(liveCount, 50);

  lagos.textContent = scale(count, 0, 100, 0, 3400).toFixed(0);
  abuja.textContent = scale(count, 0, 100, 0, 2000).toFixed(0);
  ph.textContent = scale(count, 0, 100, 0, 1400).toFixed(0);
  owerri.textContent = scale(count, 0, 100, 0, 4000).toFixed(0);
}

function scale(x, a, b, c, d) {
  return ((x - a) / (b - a)) * (d - c) + c;
}

function inView(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      liveCount();
    }
  }
}

const monitor = new IntersectionObserver(inView, {threshold:0.75})
monitor.observe(cityContainer);