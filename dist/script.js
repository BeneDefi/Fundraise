// import AOS from 'aos';                // Import the AOS library
// import 'aos/dist/style.css';            // Import AOS's CSS

// document.addEventListener('DOMContentLoaded', function () {
//   AOS.init({
//     duration: 1200,                  // Optional: Adjust the animation duration
//     easing: 'ease-in-out',           // Optional: Adjust the easing function
//   });
// });

import AOS from 'aos';
import 'aos/aos.css'; // Import AOS CSS if you haven't already

// // Initialize AOS
// AOS.init({
//   duration: 1000,  // Animation duration in milliseconds
//   once: true,      // Whether animations should happen only once
// });

AOS.init({
  duration: 1200, // Animation duration (ms)
  delay: 200,    // Delay before animation starts (ms)
  once: true,     // Only animate once when scrolled into view
  offset: 100,    // Trigger the animation when the element is 100px from the viewport
  easing: 'ease-in-out',  // Easing function for animation
});
