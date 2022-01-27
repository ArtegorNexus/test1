$('document').ready(function () {
   let leftButton = $('.carousel__left-button');
   let rightButton = $('.carousel__right-button');
   let step = 100;
   let itemsList = $('.carousel__body');
   let counter = 0;
   let maxCounter = step * $('.carousel__item').length * (-1) + 100;
   console.log(maxCounter);
   let minCounter = 0;

   $('.burger').click(function (event) {
      $('.menu__row').toggleClass('menu__row_active');
      $('.burger').toggleClass('burger_active');
   });


   $('.carousel__left-button').click(function (event) {
      if (counter != 0) {
         counter += step;
         itemsList.animate({ left : counter + "%"}, 500);
      } else {
         counter = maxCounter;       
         itemsList.animate({ left : counter + "%"}, 500);
      }
   });
   $('.carousel__right-button').click(function (event) {
      if (counter != maxCounter) {
         counter -= step;
         console.log(counter);
         itemsList.animate({ left : counter + "%"}, 500);
      } else {
         counter = 0;
         itemsList.animate({ left : counter + "%"}, 500);
      }
   });
});