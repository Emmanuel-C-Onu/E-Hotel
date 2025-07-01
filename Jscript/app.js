const mnb = document.querySelector(".nav-menu-btn");
const mnl = document.querySelector(".mobile-nav-links");
const heda = document.querySelector(".header");
const navContainer = document.querySelector(".nav-container");

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
          <div class="hotelAnima text-center pb-10 text-white text-4xl font-[Times]
                                  animate__animated animate__fadeInDownBig animate__delay-2 
                                  animate__slower">
           E-HOTEL AND LUXURY IS THE BEST FOR YOU !
          </div>
          <p class="typeHere pb-10 text-center text-white text-2xl font-extralight"> </p>
          <div class=" place-items-center grid">
            <button class="bookNow flex justify-center items-center 
                         animate__animated animate__fadeInUpBig
                         animate__delay-2 
                                  animate__slower
                            bg-gradient-to-r from-green-950 via-[green] to-green-950 
                         rounded py-2 px-9 text-white border border-[white]">
              <span class="animate-pulse font-extralight">Book Now</span>
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
  alert("Coming Soon");
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
