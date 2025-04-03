// search js start here

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
    }
    
    // search js end here 
    
    // navber js start here 
     
    let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
    }
    
    // navber js end here 
    
  // product-row js start here
    
    var swiper = new Swiper(".product-row", {
        slidesPerView: 3, // Revert to showing multiple slides at a time
        spaceBetween: 30,
        loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
      });
// product-row js end here 

// blogs-row js start here 
  var swiper = new Swiper(".blogs-row", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
centeredSlides:true,
autoplay:{
    delay:9500,
    disableOnInteraction:false,
},
navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
},
  }); 
// blogs-row js start here 

// review-row js start here

var swiper = new Swiper(".review-row", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
centeredSlides:true,
autoplay:{
    delay:9500,
    disableOnInteraction:false,
},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
},
  });
// review-row end here*/

// newsletter form submission handling
document.querySelector('.newsletter form').addEventListener('submit', function(event) {
  event.preventDefault(); // 
  const emailInput = event.target.querySelector('input[type="email"]');
  emailInput.value = '';
  alert('Thank you for subscribing!');
});