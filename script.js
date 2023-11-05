document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll("#slideshow .slide");
  
    function showSlide(index) {
      slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
        if (idx === index) {
          slide.classList.add('active');
          slide.style.opacity = '1';
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Start the slideshow
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change image every 3 seconds
  });

// JavaScript for handling carousel indicators
var slideIndex = 1;
showSlides(slideIndex);

// Fonction pour contrôler les diapositives en cliquant sur les points
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  // Cache toutes les images
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  // Retire la classe "active" de tous les points
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Affiche l'image courante et ajoute la classe "active" au point courant
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

