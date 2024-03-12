

const apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As';

function searchPlant(event) {
    event.preventDefault()
    let plantName = document.getElementById('plantName').value
    var myHeaders = new Headers();
    myHeaders.append("Api-Key", apiKey);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://plant.id/api/v3/kb/plants/name_search?q=${plantName}`, requestOptions)
    .then(response => response.json()) 
    .then(result => {
    
        
        updatePlantDetails(); //Update the plant details
    })
    .catch(error => console.log('error', error));
    
};
const plantInput = document.getElementById('plantInput');
plantInput.addEventListener('submit', searchPlant)


function getPlantDetails() {
    
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Api-Key", apiKey );

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://plant.id/api/v3/kb/plants/:access_token?details=${plantName},${url},${description},taxonomy,rank,gbif_id,inaturalist_id,${image},synonyms,${edible_parts},${watering},propagation_methods&lang=en`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};

function updatePlantDetails(plantDetails) {
    getPlantDetails()
   
    const plantName = document.getElementById("plantName");
    const description = document.getElementById("description");
    const edibleParts = document.getElementById("edible_parts");
    const watering = document.getElementById("watering");
    const url = document.getElementById("url");
    const image = document.getElementById("image");

    if (plantName) {
        plantName.textContent = plantDetails.name;
    }

    if (description) {
        description.textContent =`${plantDetails.description.value}`;
    }

    if (edibleParts) {
        edibleParts.textContent = `Edible Parts: ${plantDetails.edible_parts.join(", ")}`;
    }

    if (watering) {
        watering.textContent = `Watering: ${plantDetails.watering.min} - ${plantDetails.watering.max} inches`;
    }

    if (url) {
        url.href = `${plantDetails.url}`;
    }

    if (image) {
        image.src = `${plantDetails.image.value}`;
    }
}



//     const plantDetailsContainer = document.getElementById("plant-details");
//     plantDetailsContainer.innerHTML = ''; 
//     // Construct HTML for the card
//     const html = `
//         <div class="card" style="width: 18rem;">
//             <img src="${plantDetails.image}" class="card-img-top" alt="${plantDetails.common_names}">
//             <div class="card-body">
//                 <h5 class="card-title">${plantDetails.common_names}</h5>
//                 <p class="card-text">${plantDetails.description}</p>
//             </div>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">Rank: ${plantDetails.rank}</li>
//                 <li class="list-group-item">Edible Parts: ${plantDetails.edible_parts}</li>
//                 <!-- Add more details as needed -->
//             </ul>
//             <div class="card-body">
//                 <a href="${plantDetails.url}" class="card-link" target="_blank">More Info</a>
//             </div>
//         </div>
//     `;

//     plantDetailsContainer.innerHTML = html; // Append HTML to container
// }



// async function fetchDataForMultiplePlantsFromAPI(plantIds) {
//     try {
//         const promises = plantIds.map(async (plantId) => {
//             const response = await fetch(`https://plant.id/api/v3/kb/plants/${plantId}?details=common_names,url,description,rank,edible_parts&lang=en`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch plant data');
//             }
//             const data = await response.json();
//             return data; // Assuming the API response contains additional plant data
//         });
//         return await Promise.all(promises);
//     } catch (error) {
//         console.error('Error fetching plant data:', error);
//         return []; // Return an empty array if there's an error
//     }
// }














// felt cute might delete soon
// function displayPlantInfo(data) {

//     if (data && data.results && data.results.length > 0) {
//         const plant = data.results[0];
//         const imageUrl = plant.image ? plant.image.url : ''; // Get plant image URL
//         const plantDetails = {
//             name: plant.common_names,
//             description: plant.description,
//             image: imageUrl
//             // Add more plant details as needed
//         };
//         console.log('Plant details:', plantDetails);
//         // Render the plant details on the UI
//         renderPlantDetails(plantDetails);
//     } else {
//         console.log('No plant found with the specified name.');
//     }
// }
