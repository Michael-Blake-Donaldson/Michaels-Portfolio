// Get the lightbox
var lightbox = document.getElementById("lightbox");

// Get the button that opens the lightbox
var btn = document.querySelector(".btn-group a:nth-of-type(2)");

// Get the <span> element that closes the lightbox
var span = document.getElementsByClassName("close")[0];

// Get the title and content elements in the lightbox
var aboutTitle = document.getElementById("about-title");
var aboutContent = document.getElementById("about-content");

// When the user clicks the button, open the lightbox
btn.onclick = function() {
  lightbox.style.display = "block";
}

// When the user clicks on <span> (x), close the lightbox
span.onclick = function() {
  lightbox.style.display = "none";
}

// When the user clicks anywhere outside of the lightbox, close it
window.onclick = function(event) {
  if (event.target == lightbox) {
    lightbox.style.display = "none";
  }
}

// Get all the aboutarea elements
var aboutCards = document.querySelectorAll(".aboutarea");

// Add click event to each card
aboutCards.forEach(card => {
  card.addEventListener("click", function() {
    var title = this.getAttribute("data-title");
    var content = this.getAttribute("data-content");
    
    // Update the lightbox content
    aboutTitle.textContent = title;
    aboutContent.textContent = content;
  });
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the hire lightbox
    var hireLightbox = document.getElementById("hire-lightbox");
  
    // Get the hire button
    var hireBtn = document.querySelector(".btn-group a:first-of-type");
  
    // Get the <span> element that closes the hire lightbox
    var hireSpan = hireLightbox.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the hire lightbox 
    hireBtn.onclick = function() {
      hireLightbox.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the hire lightbox
    hireSpan.onclick = function() {
      hireLightbox.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the hire lightbox, close it
    window.onclick = function(event) {
      if (event.target == hireLightbox) {
        hireLightbox.style.display = "none";
      }
    }
  });