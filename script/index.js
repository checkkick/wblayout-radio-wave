// @ts-nocheck

function accordion(element) {
  document.querySelector(".guests-about__none-user").style.display = "flex";

  document.querySelectorAll(".guests-about__user").forEach(function (item) {
    item.style.display = "none";
  });

  document.querySelectorAll(".guests-list__content").forEach(function (item) {
    if (item.style.maxHeight) {
      item.style.maxHeight = null;
    }
  });

  const accordionLinkActive = document.querySelector(
    ".guests-list-users__link-active"
  );

  if (accordionLinkActive) {
    accordionLinkActive.classList.remove("guests-list-users__link-active");
  }

  const accordionBlockActive = document.querySelector(
    ".guests-list__item-active"
  );

  if (accordionBlockActive) {
    accordionBlockActive.classList.remove("guests-list__item-active");
  }

  const accordionContentActive = document.querySelector(
    ".guests-list__content-active"
  );

  if (accordionContentActive) {
    accordionContentActive.classList.remove("guests-list__content-active");

    document
      .querySelectorAll(".guests-list-users__link")
      .forEach(function (item) {
        item.removeEventListener("click", guestShowClick);
        item.removeEventListener("keyup", guestShowClick);
      });
  }

  element.classList.toggle("guests-list__item-active");

  let content = element.nextElementSibling;
  content.classList.toggle("guests-list__content-active");
  content.style.maxHeight = content.scrollHeight + "px";

  document
    .querySelectorAll(".guests-list-users__link")
    .forEach(function (item) {
      item.addEventListener("click", guestShowClick);
      item.addEventListener("keyup", guestShowClick);
    });
}

// -----------------------------------------------------------------------------------

function guestShowClick(event) {
  if (document.querySelector(".guests-list-users__link-active")) {
    document
      .querySelector(".guests-list-users__link-active")
      .classList.remove("guests-list-users__link-active");
  }

  document.querySelector(".guests-about__none-user").style.display = "none";

  document.querySelectorAll(".guests-about__user").forEach(function (item) {
    item.style.display = "none";
  });

  document.querySelectorAll(".guests-about__user").forEach(function (item) {
    if (item.dataset.path === event.target.dataset.path) {
      event.target.classList.toggle("guests-list-users__link-active");
      item.style.display = "block";
    }
  });
}

// -----------------------------------------------------------------------------------

const element = document.querySelector(".shows-archive__select");
const choices = new Choices(element, {
  allowHTML: true,
  searchEnabled: false,
  placeholder: true,
  itemSelectText: "",
});

// -----------------------------------------------------------------------------------

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    535: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  a11y: {
    nextSlideMessage: "Следующий слайд",
    prevSlideMessage: "Предыдущий слайд",
  },
});

// -----------------------------------------------------------------------------------

document.querySelectorAll(".guests-list__item").forEach(function (item) {
  item.addEventListener("click", function () {
    accordion(item);
  });
});

// -----------------------------------------------------------------------------------

document.querySelectorAll(".guests-list__item").forEach((item) => {
  item.addEventListener("keyup", function (e) {
    if (e.keyCode === 9) {
      accordion(e.target);
    }
  });
});

// -----------------------------------------------------------------------------------

document
  .querySelector(".header-buttons__search")
  .addEventListener("click", function () {
    const searchHidden = document.querySelector(
      ".header-buttons__search-hidden"
    );

    if (
      searchHidden.classList.contains("header-buttons__search-hidden--inactive")
    ) {
      searchHidden.style.display = "block";
      searchHidden.classList.add("header-buttons__search-hidden--active");
      searchHidden.classList.remove("header-buttons__search-hidden--inactive");
    } else {
      searchHidden.classList.add("header-buttons__search-hidden--inactive");
      searchHidden.classList.remove("header-buttons__search-hidden--active");
      setTimeout(() => {
        searchHidden.style.display = "none";
      }, 500);
    }
  });

// -----------------------------------------------------------------------------------

document.querySelectorAll(".header__enter-button").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".modal").classList.toggle("modal--active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document
  .querySelector(".modal-window__close-btn")
  .addEventListener("click", function () {
    document.querySelector(".modal").classList.toggle("modal--active");
    document.querySelector("body").style.overflow = null;
  });

// -----------------------------------------------------------------------------------

document.querySelector(".podcasts__btn").addEventListener("click", function () {
  document.querySelectorAll(".podcasts-item.hidden").forEach((item) => {
    item.classList.toggle("hidden");
  });

  document.querySelector(".podcasts__btn").classList.toggle("hidden");
  document.querySelector(".podcasts-list").style.margin = "0";
});

// -----------------------------------------------------------------------------------

function closeMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");

  document.querySelector("body").style.overflow = null;
  mobileMenu.classList.add("mobile-menu--inactive");
  mobileMenu.classList.remove("mobile-menu--active");
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 500);

  document.querySelectorAll(".mobile-nav__link").forEach((item) => {
    item.removeEventListener("click", closeMobileMenu);
  });
}

document.querySelector(".header-burger").addEventListener("click", function () {
  const mobileMenu = document.querySelector(".mobile-menu");

  document.querySelector("body").style.overflow = "hidden";
  mobileMenu.style.display = "block";
  mobileMenu.classList.remove("mobile-menu--inactive");
  mobileMenu.classList.add("mobile-menu--active");

  document.querySelectorAll(".mobile-nav__link").forEach((item) => {
    item.addEventListener("click", closeMobileMenu);
  });
});

document
  .querySelector(".mobile-menu__close")
  .addEventListener("click", closeMobileMenu);

// -----------------------------------------------------------------------------------

const headerMobileRow = document.querySelector(".mobile-header__row");
headerMobileRow.addEventListener("click", () => {
  headerMobileRow.classList.toggle("mobile-header__row--active");
});

// -----------------------------------------------------------------------------------

new Swiper(".playlists-swiper", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 10,
});

// -----------------------------------------------------------------------------------
