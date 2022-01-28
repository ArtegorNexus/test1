"use strict";
$('document').ready(function () {
   // Переменные для карусели
   let leftButton = $('.carousel__left-button');
   let rightButton = $('.carousel__right-button');
   let step = 100;
   let itemsList = $('.carousel__body');
   let counter = 0;
   let maxCounter = step * $('.carousel__item').length * (-1) + 100;
   console.log(maxCounter);
   let minCounter = 0;

   // Переменные для таймера
   let timer = $('.buy__time');

   // Скрипт для бургера
   $('.burger').click(function (event) {
      $('.menu__row').toggleClass('menu__row_active');
      $('.burger').toggleClass('burger_active');
      $('body').toggleClass('lock');
   });



   // Скрипт для карусели
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



   // Скрипт для таймера
   let znach;
   let time = '30:00';
   let i = 30;
   let j = 0;
   countdown ();
   function countdown() {
      timer.html(time);
      if (i == 0 & j == 0) {
         clearTimeout(countdown);
      } else if (i == 0 & j > 0) {
         --j;
         if (j < 10) {
            time = i + ':0' + j;
         } else {
            time = i + ':' + j;
         }
         setTimeout(countdown, 1000);
      } else if (i > 0 & j == 0) {
         --i;
         j = 59;
         if (j < 10) {
            time = i + ':0' + j;
         } else {
            time = i + ':' + j;
         }
         setTimeout(countdown, 1000);
      } else if (i > 0 & j > 0) {
         --j;
         if (j < 10) {
            time = i + ':0' + j;
         } else {
            time = i + ':' + j;
         }
         setTimeout(countdown, 1000);
      };
   }
   //Скрипт для всплывающего окна
   

});