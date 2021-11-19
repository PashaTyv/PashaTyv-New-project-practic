// $(document).ready(function() {
//    $('header-burger').click(function(event) {
//       $('header-burger').toggleClass('active');
//    });
// });

(function () {
   const burger = document.querySelector('.header-burger');
   const headerSideBar = document.querySelector('.header-sidebar');
   burger.addEventListener('click', () => {
   headerSideBar.classList.toggle('active')
   });
}());

// element.classList.remove("mystyle");


(function () {
   const close = document.querySelector('.close');
   const headerSideBar = document.querySelector('.header-sidebar');
   close.addEventListener('click', () => {
   headerSideBar.classList.remove('active')
   });
}());