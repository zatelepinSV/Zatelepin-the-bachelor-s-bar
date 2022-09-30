let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 100;

  if (offset > 200) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'vw'
});
document.querySelector('.slider-prev').addEventListener('click', function () {
  offset = offset - 100;

  if (offset < 0) {
    offset = 200;
  }
  sliderLine.style.left = -offset + 'vw'
});