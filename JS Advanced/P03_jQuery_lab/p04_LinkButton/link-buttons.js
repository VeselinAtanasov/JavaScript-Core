function attachEvents(){
    "use strict";
  let buttons=$('.button').on('click',changeClass);

  function changeClass() {
      $('.button').removeClass('selected')
      $(this).addClass('selected')
  }
}