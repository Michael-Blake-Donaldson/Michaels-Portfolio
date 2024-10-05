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