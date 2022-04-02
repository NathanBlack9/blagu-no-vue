$('.js-hovered-toggler').hover(function () {
  const $this = $(this);
  const $class = "hovered";

  $this.toggleClass($class);
})