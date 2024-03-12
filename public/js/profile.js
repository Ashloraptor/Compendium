// Function to render user profile
function renderUserProfile() {
  // Select the container where plant list will be displayed
  const plantListContainer = document.querySelector('.plant-list');
  if (!plantListContainer) {
    console.error('Plant list container not found.');
    return;
  }

  // Retrieve user profile from local storage, or initialize with an empty array if not found
  let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { plants: [] };

  // Clear existing content
  plantListContainer.innerHTML = '';

  // Check if there are any saved plants
  if (userProfile.plants.length === 0) {
    plantListContainer.innerHTML = '<p>No saved plants.</p>';
    return;
  }

  // Iterate through each saved plant and render it
  userProfile.plants.forEach((plantData, index) => {
    // Create a div to hold plant information
    const plantItem = document.createElement('div');
    plantItem.classList.add('plantCard', 'mb-2');
    plantItem.style.width = '18rem';

    // Populate the div with plant information
    plantItem.innerHTML = `
      <img class="plant-image card-img-top" src="${plantData.image}" alt="">
      <div class="card-body">
        <h5 class="plant-name">${plantData.name}</h5>
        <p class="plant-description card-text">${plantData.description}</p>
        <p class="plant-comment">Comment: ${plantData.comment}</p>
      </div>
    `;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-sm', 'btn-danger', 'delete-btn');
    deleteButton.setAttribute('data-id', index); // Use index as unique identifier
    deleteButton.textContent = 'DELETE';

    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
      deletePlant(index);
    });

    // Append delete button to card body
    plantItem.querySelector('.card-body').appendChild(deleteButton);

    // Append the plant item to the container
    plantListContainer.appendChild(plantItem);
  });
}

// Function to delete a plant from user profile
function deletePlant(index) {
  // Retrieve user profile from local storage
  let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { plants: [] };

  // Remove the plant at the specified index
  userProfile.plants.splice(index, 1);

  // Save updated user profile to local storage
  localStorage.setItem('userProfile', JSON.stringify(userProfile));

  // Re-render user profile
  renderUserProfile();
}

// Call renderUserProfile function to initially render the user's profile
renderUserProfile();