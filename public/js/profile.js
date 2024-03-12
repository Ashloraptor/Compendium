<<<<<<< HEAD
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
  
=======

let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { plants: [] };

function renderUserProfile() {
  const plantListContainer = document.querySelector('.plant-list');
  if (!plantListContainer) {
    console.error('Plant list container not found.');
    return;
  }

  plantListContainer.innerHTML = '';
  if (userProfile.plants.length === 0) {
    plantListContainer.innerHTML = '<p>No saved plants.</p>';
    return;
  }

  userProfile.plants.forEach(plantData => {
    const plantItem = document.createElement('div');
    plantItem.classList.add('row', 'mb-2');
    plantItem.innerHTML = `
      <div class="col-md-8">
        <h4><a href="/plant/${plantData.plant.entity_id}">${plantData.plant.name}</a></h4>
        <p>${plantData.comment}</p>
      </div>
      <div class="col-md-4">
        <button class="btn btn-sm btn-danger delete-btn" data-id="${plantData.plant.entity_id}">DELETE</button>
      </div>
    `;
    plantListContainer.appendChild(plantItem);
  });

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const plantId = button.getAttribute('data-id');
      deletePlant(plantId);
    });
  });
}

// Function to delete a plant from the user's profile
function deletePlant(plantId) {
  userProfile.plants = userProfile.plants.filter(plantData => plantData.plant.entity_id !== plantId);
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  renderUserProfile();
}

renderUserProfile();
>>>>>>> 1bf9b89a23d350e0d17d5b26563c2eaaa52a8191
