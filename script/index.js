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

  const accordionLinkActive = document.querySelector(
    ".guests__row__accordion-list__item__content__list__item__link-active"
  );

  if (accordionLinkActive) {
    accordionLinkActive.classList.remove(
      "guests__row__accordion-list__item__content__list__item__link-active"
    );
  }

  const accordionBlockActive = document.querySelector(
    ".guests__row__accordion-list__item__block-active"
  );

  if (accordionBlockActive) {
    accordionBlockActive.classList.remove(
      "guests__row__accordion-list__item__block-active"
    );
  }

  const accordionContentActive = document.querySelector(
    ".guests__row__accordion-list__item__content-active"
  );

  if (accordionContentActive) {
    accordionContentActive.classList.remove(
      "guests__row__accordion-list__item__content-active"
    );

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

// -----------------------------------------------------------------------------------

document
  .querySelector(".header__main__flex__buttons__search")
  .addEventListener("click", function () {
    const searchHidden = document.querySelector(
      ".header__main__flex__buttons__search__hidden"
    );

    if (searchHidden.classList.contains("inactive")) {
      searchHidden.style.display = "block";
      searchHidden.classList.add("active");
      searchHidden.classList.remove("inactive");
    } else {
      searchHidden.classList.add("inactive");
      searchHidden.classList.remove("active");
      setTimeout(() => {
        searchHidden.style.display = "none";
      }, 500);
    }
  });

// -----------------------------------------------------------------------------------

document
  .querySelector(".header__main__flex__buttons__enter")
  .addEventListener("click", function () {
    document.querySelector(".modal").classList.toggle("active");
    document.querySelector("body").style.overflow = "hidden";
  });

document
  .querySelector(".modal__window__close-btn")
  .addEventListener("click", function () {
    document.querySelector(".modal").classList.toggle("active");
    document.querySelector("body").style.overflow = null;
  });

// -----------------------------------------------------------------------------------

document.querySelector(".podcasts__btn").addEventListener("click", function () {
  document.querySelectorAll(".podcasts__block__item.hidden").forEach((item) => {
    item.classList.toggle("hidden");
  });

  document.querySelector(".podcasts__btn").classList.toggle("hidden");
});
