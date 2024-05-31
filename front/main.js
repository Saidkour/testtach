//animation about when im scrolle
window.addEventListener('scroll', function() {
    const element = document.querySelector('.titreabout');
    const elementPosition = element.getBoundingClientRect().top;
  
    if (elementPosition < window.innerHeight) {
      element.classList.add('animated');
    }
    else{
      element.classList.remove('animated');

    }
  });
  // animation about when im scroll big img
  window.addEventListener('scroll', function() {
    const element = document.querySelector('.btnanim1');
    const elementPosition = element.getBoundingClientRect().top;
  
    if (elementPosition < window.innerHeight) {
      element.classList.add('animated1');
    }
    else{
      element.classList.remove('animated1');

    }
  });
// animation about when im scroll small img
window.addEventListener('scroll', function() {
    const element = document.querySelector('.btnanim2');
    const elementPosition = element.getBoundingClientRect().top;
  
    if (elementPosition < window.innerHeight) {
      element.classList.add('animated2');
    }
    else{
      element.classList.remove('animated2');

    }
  });

//make bouton when mouseentere
    const images = document.querySelectorAll(".hoverable-image");

    images.forEach(image => {
        image.addEventListener("mouseenter", function() {
            // Show the button when the mouse enters the image
            const button = this.nextElementSibling; // Get the next sibling (the button)
            button.style.display = "block";
            console.log('Button shown'); // Log for testing
        });
    
        image.addEventListener("mouseleave", function() {
            // Hide the button when the mouse leaves the image
            const button = this.nextElementSibling; // Get the next sibling (the button)
            button.style.display = "none";
            console.log('Button hidden'); // Log for testing
        });
    });

   // swiper js  
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Number of slides to show at a time
        spaceBetween: 20, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });