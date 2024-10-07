document.addEventListener('DOMContentLoaded', (event) => {
  // Get the hire lightbox
  var hireLightbox = document.getElementById("hire-lightbox");
  
  // Ensure the lightbox exists
  if (!hireLightbox) {
      console.error('Hire lightbox not found!');
      return;
  }

  // Get the hire button
  var hireBtn = document.querySelector('.btn-group a[href="#hire-lightbox"]');
  
  // Ensure the hire button exists
  if (!hireBtn) {
      console.error('Hire button not found!');
      return;
  }
  
  // Get the <span> element that closes the hire lightbox
  var hireSpan = hireLightbox.getElementsByClassName("close")[0];
  
  // Ensure the close button exists
  if (!hireSpan) {
      console.error('Close button not found!');
      return;
  }

  // When the user clicks the button, open the hire lightbox
  hireBtn.onclick = function(event) {
    event.preventDefault();  // Prevent default link behavior
    hireLightbox.style.display = "block";
  };

  // When the user clicks on <span> (x), close the hire lightbox
  hireSpan.onclick = function() {
    hireLightbox.style.display = "none";
  };

  // When the user clicks anywhere outside of the hire lightbox, close it
  window.onclick = function(event) {
    if (event.target === hireLightbox) {
      hireLightbox.style.display = "none";
    }
  };
});

const tooltips = document.querySelectorAll('.tooltip-item');
  const originalInfo = document.getElementById('original-info');
  const workInfo = document.getElementById('work-info');
  const educationInfo = document.getElementById('education-info');
  const hobbiesInfo = document.getElementById('hobbies-info');

  let activeButton = null; // Track the currently active button

  tooltips.forEach((tooltip) => {
      tooltip.addEventListener('click', function () {
          const selectedInfo = tooltip.getAttribute('data-info');
          const isAlreadyActive = tooltip === activeButton; // Check if the clicked button is already active

          // Reset all sections
          originalInfo.style.display = 'none';
          workInfo.style.display = 'none';
          educationInfo.style.display = 'none';
          hobbiesInfo.style.display = 'none';

          // Reset all buttons
          tooltips.forEach((btn) => {
              btn.classList.remove('active');
          });

          if (isAlreadyActive) {
              // If the same button is clicked again, go back to the original state
              originalInfo.style.display = 'block';
              activeButton = null; // Reset the active button
          } else {
              // Show the corresponding info section and activate the button
              tooltip.classList.add('active');
              if (selectedInfo === 'work') {
                  workInfo.style.display = 'block';
              } else if (selectedInfo === 'education') {
                  educationInfo.style.display = 'block';
              } else if (selectedInfo === 'hobbies') {
                  hobbiesInfo.style.display = 'block';
              }

              // Set the current button as active
              activeButton = tooltip;
          }
      });
  });

