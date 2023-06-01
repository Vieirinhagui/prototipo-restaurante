$(".menu-hamburguer").click(function () {
  toggleMenu(true);
});

$("#icon-fechar, .click").click(function () {
  toggleMenu(false);
});

function toggleMenu(open) {
  if (open) {
    $(".menu-mobile").removeClass("right");
    $("#icon-fechar").removeClass("right");
    $("#background").css("display", "flex");
  } else {
    $(".menu-mobile").addClass("right");
    $("#icon-fechar").addClass("right");
    setTimeout(function () {
      $("#background").css("display", "none");
    }, 800);
  }
}
const swiper1 = new Swiper(".swiper", {
  slidesPerView: 2,
  loop: true,
  speed: 5000,
  disableOnInteraction: false,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
