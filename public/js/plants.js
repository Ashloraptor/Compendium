// // var plantSearch = document.querySelector(".plant-searchbutton");
// // var plantName = document.querySelector(".plant-name");
// // var apiURL = "";
// // var API_KEY='bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As'
// // var plantHistory = JSON.parse(localStorage.getItem("Compendium"))||[]


// function identifyPlant(imageData) {

//     const apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As'

//     // Request body
//     const requestBody = {
//         images: [imageData], 
//         details: 'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods', // Specify the requested plant details
//         language: 'en', 
//         async: true
//     };


//     fetch('https://plant.id/api/v3/identification', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Api-Key ${apiKey}`
//         },
//         body: JSON.stringify(requestBody)
//     })
//     .then(response => response.json())
//     .then(data => {

//         console.log('Plant identification response:', data);

//         document.getElementById('output').innerHTML = JSON.stringify(data, null, 2);
//     })
//     .catch(error => {
//         console.error('Error identifying plant:', error);
//     });
// }

// // uploading plant picture
// document.getElementById('imageInput').addEventListener('change', function(event) {
//     var file = event.target.files[0];
//     if (file) {
//         var reader = new FileReader();
//         reader.onload = function(event) {
//             // Get the base64 encoded image data
//             var imageData = event.target.result;

//             //function to identify the plant with the uploaded image data
//             identifyPlant(imageData);
//         };
//         reader.readAsDataURL(file);
//     }
// });

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
    // const requestBody = {
    //     // "query": plantName,
    //     "details": "common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods", // Specify the requested plant details
    //     "language": "en"
    // };

    // //https://plant.id/api/v3/kb/plants/name_search?q=aloe vera
    // fetch(`https://plant.id/api/v3/kb/plants/name_search?q=${plantName}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Api-Key ${apiKey}`
    //     },
    //     // body: JSON.stringify(requestBody)
    // })
    // .then(response => response.json())
    // .then(data => {

    //     console.log('Plant search response:', data);
    //     displayPlantInfo(data); 
    // })
    // .catch(error => {
    //     console.error('Error searching plant:', error);
    // });
}
//  look at weather app and make cards 
function displayPlantInfo(data) {

    if (data && data.results && data.results.length > 0) {
        const plant = data.results[0];
        const imageUrl = plant.image ? plant.image.url : ''; // Get plant image URL
        const plantDetails = {
            name: plant.common_names,
            description: plant.description,
            image: imageUrl
            // Add more plant details as needed
        };
        console.log('Plant details:', plantDetails);
        // Render the plant details on the UI
        renderPlantDetails(plantDetails);
    } else {
        console.log('No plant found with the specified name.');
    }
}
// ????????? HELP
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
