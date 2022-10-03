// @ts-nocheck
const element = document.querySelector(".shows__row__archive__top__select");
const choices = new Choices(element, {
  allowHTML: true,
  searchEnabled: false,
  placeholder: true,
  itemSelectText: "",
});

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
