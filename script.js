let swiper = new Swiper('.swiper', {  
    width: 256,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
   });
     let button = document.querySelector('.button');
  
  
     button.addEventListener('click', function(){
       let item = document.querySelectorAll('.hidden');
       let content = document.querySelector('.button__text');
       let img = document.querySelector('.button__img');
       for (let i = 0; i < item.length; i++ ){
         item[i].classList.toggle('brand__slider--visible');
         if (item[i].classList.contains('brand__slider--visible')){
           content.textContent = 'Скрыть'
         }
         else {
           content.textContent = 'Показать все';
         }
         img.classList.toggle('button__img--rotate');
       }
       
     });
  