// * mobile navbar
document.querySelector('.nav-hamburger-menu').addEventListener('click', () => {
  document.querySelector('.nav-mobile-links').classList.toggle('show-hide')
})

const slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  autoplay: true
});
