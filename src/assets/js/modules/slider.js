$('.js-works-slider').slick({
  "arrows": false,
  "dots": false,
  "focusOnSelect": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "touchThreshold": 100,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "dots": true
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "dots": true,
      }
    }
  ]
});