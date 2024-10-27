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
  
  //Falling ball physics
  document.addEventListener('DOMContentLoaded', function () {
    const { Engine, Render, Runner, Bodies, Composite } = Matter;

    // Create an engine
    const engine = Engine.create();
    const { world } = engine;

    // Create a renderer with initial wireframe setting
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false, // Start with wireframe off
            background: 'transparent'
        }
    });
    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create static bodies for each project card
    const projectCards = document.querySelectorAll('.container');
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardBody = Bodies.rectangle(rect.left + rect.width / 2, rect.top + rect.height / 2, rect.width, rect.height, { isStatic: true });
        Composite.add(world, cardBody);
    });

    // Get the spawn area position
    const spawnArea = document.getElementById('spawn-area');
    const spawnRect = spawnArea.getBoundingClientRect();

    // Function to create a ball at the top
    function createBall(x) {
        const ball = Bodies.circle(x, spawnRect.top, 20, { 
            restitution: 0.7, // Bounciness
            render: {
                fillStyle: '#ff7f50'
            }
        });
        Composite.add(world, ball);
    }

    // Generate balls at intervals
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        createBall(x); 
    }, 1000);

    // Add toggle functionality for wireframe
    const wireframeToggle = document.getElementById('wireframe-toggle');
    wireframeToggle.addEventListener('click', () => {
        render.options.wireframes = !render.options.wireframes; // Toggle wireframe
        Render.run(render); // Re-render with new settings
    });

    // Update physics engine on resize to adjust card positions
    window.addEventListener('resize', () => {
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: window.innerWidth, y: window.innerHeight }
        });
    });
});




