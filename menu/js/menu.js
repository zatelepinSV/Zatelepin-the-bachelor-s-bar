$(document).ready(function () {

  var accordionHeaderClickHandler = function (e) {
    document.querySelectorAll('.accordion-section')
      .forEach(function (section) {
        section.querySelector('.accordion-body').style.maxHeight = '0px'
      })
    var accordionSection = e.target.closest('.accordion-section')
    var insideElHeight = accordionSection.querySelector('.accordion-body > *').clientHeight

    accordionSection.querySelector('.accordion-body').style.maxHeight = insideElHeight + 'px'
  }
  document.querySelectorAll('.accordion-section')
    .forEach(function (section) {
      section.addEventListener('click', accordionHeaderClickHandler)
    })
  $('.current a').css('color', 'white');

});


