// @ts-nocheck

function accordion(element) {
  document.querySelector(".guests__row__item-about__none-user").style.display =
    "flex";

  document
    .querySelectorAll(".guests__row__item-about__user")
    .forEach(function (item) {
      item.style.display = "none";
    });

  document
    .querySelectorAll(".guests__row__accordion-list__item__content")
    .forEach(function (item) {
      if (item.style.maxHeight) {
        item.style.maxHeight = null;
      }
    });

  if (
    document.querySelector(
      ".guests__row__accordion-list__item__content__list__item__link-active"
    )
  ) {
    document
      .querySelector(
        ".guests__row__accordion-list__item__content__list__item__link-active"
      )
      .classList.remove(
        "guests__row__accordion-list__item__content__list__item__link-active"
      );
  }

  if (
    document.querySelector(".guests__row__accordion-list__item__block-active")
  ) {
    document
      .querySelector(".guests__row__accordion-list__item__block-active")
      .classList.remove("guests__row__accordion-list__item__block-active");
  }
  if (
    document.querySelector(".guests__row__accordion-list__item__content-active")
  ) {
    document
      .querySelector(".guests__row__accordion-list__item__content-active")
      .classList.remove("guests__row__accordion-list__item__content-active");

    document
      .querySelectorAll(
        ".guests__row__accordion-list__item__content__list__item__link"
      )
      .forEach(function (item) {
        item.removeEventListener("click", guestShowClick);
        item.removeEventListener("keyup", guestShowClick);
      });
  }

  element.classList.toggle("guests__row__accordion-list__item__block-active");

  let content = element.nextElementSibling;
  content.classList.toggle("guests__row__accordion-list__item__content-active");
  content.style.maxHeight = content.scrollHeight + "px";

  document
    .querySelectorAll(
      ".guests__row__accordion-list__item__content__list__item__link"
    )
    .forEach(function (item) {
      item.addEventListener("click", guestShowClick);
      item.addEventListener("keyup", guestShowClick);
    });
}

// -----------------------------------------------------------------------------------

function guestShowClick(event) {
  if (
    document.querySelector(
      ".guests__row__accordion-list__item__content__list__item__link-active"
    )
  ) {
    document
      .querySelector(
        ".guests__row__accordion-list__item__content__list__item__link-active"
      )
      .classList.remove(
        "guests__row__accordion-list__item__content__list__item__link-active"
      );
  }

  document.querySelector(".guests__row__item-about__none-user").style.display =
    "none";

  document
    .querySelectorAll(".guests__row__item-about__user")
    .forEach(function (item) {
      item.style.display = "none";
    });

  document
    .querySelectorAll(".guests__row__item-about__user")
    .forEach(function (item) {
      if (item.dataset.path === event.target.dataset.path) {
        event.target.classList.toggle(
          "guests__row__accordion-list__item__content__list__item__link-active"
        );
        item.style.display = "block";
      }
    });
}

// -----------------------------------------------------------------------------------

const element = document.querySelector(".shows__row__archive__top__select");
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

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// -----------------------------------------------------------------------------------

document
  .querySelectorAll(".guests__row__accordion-list__item__block")
  .forEach(function (item) {
    item.addEventListener("click", function () {
      accordion(item);
    });
  });

// -----------------------------------------------------------------------------------

document
  .querySelectorAll(".guests__row__accordion-list__item__block")
  .forEach((item) => {
    item.addEventListener("keyup", function (e) {
      if (e.keyCode === 9) {
        accordion(e.target);
      }
    });
  });
