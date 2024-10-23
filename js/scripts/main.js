// ****** Swiperjs ******
var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  spaceBetween: 20,
  whatchSlidesProgress: true,
  breakpoints: {
    1150: {
      direction: "vertical",
    },
    320: {
      direction: "horizontal",
    },
  },
});

const progressSlide = document.querySelector(".js-progress");

var slide_hero = new Swiper(".slide-principal", {
  effect: "fade",
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      progressSlide.classList.remove("animate");
      progressSlide.classList.remove("active");
      progressSlide.classList.add("animate");
      progressSlide.classList.add("active");
    },
    slideChangeTransitionStart: function () {
      progressSlide.classList.remove("animate");
      progressSlide.classList.remove("active");
      progressSlide.classList.add("active");
    },
    slideChangeTransitionEnd: function () {
      progressSlide.classList.add("animate");
    },
  },
});

const allFilters = document.querySelectorAll(".js-nav-games li a");
const tabPane = document.querySelectorAll(".tab-pane-games");

allFilters.forEach((filter, index) => {
  filter.addEventListener("click", (event) => {
    event.preventDefault();

    allFilters.forEach((item) => {
      item.classList.remove("active");
      item.removeAttribute("class");
    });

    tabPane.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabPane[index].classList.add("active");
    filter.classList.add("active");
  });
});

const bntOpenModal = document.querySelector(".js-open-modal");
const bntCloseModal = document.querySelector(".js-close");
const clickOverlay = document.querySelector(".js-overlay");
const tagHtml = document.documentElement;

bntOpenModal.addEventListener("click", (event) => {
  event.preventDefault();

  tagHtml.classList.add("show-modal");
});

bntCloseModal.addEventListener("click", (event) => {
  event.preventDefault();

  tagHtml.classList.remove("show-modal");
});

clickOverlay.addEventListener("click", (event) => {
  event.preventDefault();

  tagHtml.classList.remove("show-modal");
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  const escPressed = event.key === "Escape" || event.key === "Esc";

  if (escPressed) {
    tagHtml.classList.remove("show-modal");
  }
});

// ****** Menu ******
const btnMenu = document.querySelectorAll(".js-bnt-menu");
const menuSite = document.querySelectorAll(".js-menu");

btnMenu.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    menuSite.forEach((itemMenu) => {
      itemMenu.classList.remove("active");
      itemMenu.addEventListener("mouseleave", () => {
        itemMenu.classList.remove("active");
        btnMenu.forEach((itemBtn) => {
          itemBtn.classList.remove("active");
        });
      });
    });

    btnMenu.forEach((itemBtn) => {
      itemBtn.classList.remove("active");
    });

    btn.classList.add("active");
    menuSite[index].classList.toggle("active");
  });
});
