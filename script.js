document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    perPage: 3,
    arrows: false,
    breakpoints: {
      2500: {
        perPage: 2,
      },
      975: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});
