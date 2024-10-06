document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn.fill'); // Select all "Learn More" buttons
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', function () {
        const container = button.closest('.container');
        const content = container.querySelector('.wrapper');
        const descriptionText = button.getAttribute('data-description'); // Get the description from the data attribute
        const description = document.createElement('div');
        const closeButton = document.createElement('button'); // Create the close button
  
        // Remove current content with animation
        content.classList.add('hide');
        button.classList.add('hide'); // Hide the "Learn More" button
  
        // Add the description after a short delay
        setTimeout(() => {
          content.style.display = 'none'; // Hide the content and button
          button.style.display = 'none';
  
          // Create and display the description
          description.classList.add('description');
          description.innerHTML = `
            <h2>Project Description</h2>
            <p>${descriptionText}</p> <!-- Use the description from the data attribute -->
          `;
  
          // Create and configure the close button (X)
          closeButton.classList.add('close-btn');
          closeButton.innerHTML = '&times;'; // X symbol
          closeButton.classList.add('show'); // Animate the button to show
  
          container.appendChild(description);
          container.appendChild(closeButton);
          description.classList.add('show'); // Show the description
  
          // Add functionality to the close button
          closeButton.addEventListener('click', function () {
            // Reverse the animation to hide the description
            description.classList.remove('show');
            closeButton.classList.remove('show');
  
            setTimeout(() => {
              // Remove description and prepare original content for fade-in
              description.remove();
              closeButton.remove();
              content.classList.add('fade-in'); // Add fade-in class for animation
              content.style.display = 'block'; // Display the content again
              button.style.display = 'block';
              
              // Trigger the fade-in animation
              setTimeout(() => {
                content.classList.add('show'); // Show the content with the fade-in animation
                button.classList.remove('hide');
                content.classList.remove('hide');
              }, 10); // Slight delay to ensure the fade-in class is applied
  
            }, 500); // Wait for fade-out animation
          });
  
        }, 500); // Wait for the fade-out animation to complete
      });
    });
  });
  