const filter = document.querySelector('.filter');

if (filter) {
  const items = filter.querySelectorAll('.block-filter');

  items.forEach(item => {
    item.addEventListener('click', e => {
      item.querySelector('.block-filter__dropdown').classList.toggle('_active');
      item.querySelector('.block-filter__icon').classList.toggle('_active');

      if (e.target.classList.contains('block-filter__item')) {
        item.querySelector('.block-filter__value').textContent = e.target.textContent;
      };
    })
  })
};

// Swiper Slider
const popularSlider = new Swiper('.popular-slider', {
  spaceBetween: 20,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.popular-slider-next',
    prevEl: '.popular-slider-prev',
  },
});

// Swiper Slider
const reviewsSlider = new Swiper('.slider-reviews', {
  autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-reviews-next',
    prevEl: '.slider-reviews-prev',
  },
});

// Gallery
const galleryItems = document.querySelectorAll('.gallery__item');

if (galleryItems.length > 0) {
  galleryItems.forEach(item => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 4000,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    })
  })
}