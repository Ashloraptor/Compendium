async function createPlant(plantData) {
    try {
        const response = await fetch('/api/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(plantData),
        });
  
        if (!response.ok) {
            throw new Error('Failed to create plant');
        }
  
        const newPlant = await response.json();
        console.log('New plant created:', newPlant);
  
        // Call a function to update the page with the new plant
        updatePageWithPlant(newPlant);
  
    } catch (error) {
        console.error('Error creating plant:', error.message);
    }
  }
  
  // Function to update the page with the newly created plant
  function updatePageWithPlant(plant) {
      // Assuming there is a container element to hold the list of plants
      const plantsContainer = document.getElementById('plantsContainer');
  
      if (plantsContainer) {
          // Create a new plant element to append to the container
          const plantElement = document.createElement('div');
          plantElement.classList.add('plant');
          plantElement.innerHTML = `
              <h2>${plant.name}</h2>
              <p>Type: ${plant.type}</p>
              <p>Color: ${plant.color}</p>
              <p>Height: ${plant.height}</p>
              <!-- Add more properties as needed -->
          `;
  
          // Append the new plant element to the container
          plantsContainer.appendChild(plantElement);
      }
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    const plantForm = document.getElementById('plantInput');
    if (plantForm) {
        console.log("Ready");
  
        plantForm.addEventListener('submit', async (event) => {
            console.log("search");
            event.preventDefault();
  
            const formData = new FormData(plantForm);
            const plantData = Object.fromEntries(formData.entries());
  
            await createPlant(plantData);
        });
    }
  });
  