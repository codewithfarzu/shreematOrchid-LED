/* Carousel ==================================== */

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2, // 2 logos on small mobile
        margin: 10
      },
      600: {
        items: 3, // 3 logos on tablets
        margin: 15
      },
      1000: {
        items: 5 // 5-6 logos on desktop
      }
    }
  });
});

/* ======================================================== */
function openLightbox(src) {
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Stop scrolling when open
}

function closeLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling again
}

// Close on 'Esc' key
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeLightbox();
});