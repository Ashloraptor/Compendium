
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