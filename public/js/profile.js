
function renderUserProfile() {
  
  const plantListContainer = document.querySelector('.plant-list');
  if (!plantListContainer) {
      console.error('Plant list container not found.');
      return;
  }

  
  let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { plants: [] };

  plantListContainer.innerHTML = '';
  if (userProfile.plants.length === 0) {
      plantListContainer.innerHTML = '<p>No saved plants.</p>';
      return;
  }

 
  userProfile.plants.forEach((plantData, index) => {
     
      const plantItem = document.createElement('div');
      plantItem.classList.add('plantCard', 'mb-2');
      plantItem.style.width = '18rem';

      
      plantItem.innerHTML = `
          <img class="plant-image card-img-top" src="${plantData.image}" alt="">
          <div class="card-body">
              <h5 class="plant-name">${plantData.name}</h5>
              <p class="plant-url card-text">URL: <a href="${plantData.url}" target="_blank">${plantData.url}</a></p>
              <p class="plant-comment">Comment: ${plantData.comment}</p>
          </div>
      `;

    
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn', 'btn-sm', 'btn-danger', 'delete-btn');
      deleteButton.setAttribute('data-id', index); 
      deleteButton.textContent = 'DELETE';

      
      deleteButton.addEventListener('click', () => {
          deletePlant(index);
      });

      
      plantItem.querySelector('.card-body').appendChild(deleteButton);

      
      plantListContainer.appendChild(plantItem);
  });
}


function deletePlant(index) {
  let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { plants: [] };

  userProfile.plants.splice(index, 1);


  localStorage.setItem('userProfile', JSON.stringify(userProfile));


  renderUserProfile();
}


renderUserProfile();