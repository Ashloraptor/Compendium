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
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
}

function renderPlantDetails(plantDetails) {
    // Render plant details on the UI as needed

    // You can update the DOM elements with the retrieved plant information
    document.getElementById('plantImage').src = plantDetails.image; // Update plant image
    document.getElementById('plantName').textContent = plantDetails.name; // Update plant name
    document.getElementById('plantDescription').textContent = plantDetails.description; // Update plant description
}

// // Example usage: Search for a plant by name
// const plantName = 'Rose'; // Replace with the actual plant name input by the user
// searchPlant(plantName);
const plantInput = document.getElementById('plantInput');
plantInput.addEventListener('submit', searchPlant)




















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
