

// const apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As';

// function searchPlant(event) {
//     event.preventDefault();
//     let plantName = document.getElementById('plantName').value;
//     var myHeaders = new Headers();
//     myHeaders.append("Api-Key", apiKey);
//     myHeaders.append("Content-Type", "application/json");

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };

//     fetch(`https://plant.id/api/v3/kb/plants/name_search?q=${plantName}`, requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             const access_token = result.entities[0].access_token; // Extract access token from response
//             getPlantDetails(access_token); // Call getPlantDetails with the access token
//         })
//         .catch(error => console.log('error', error));
// }

// const plantInput = document.getElementById('plantInput');
// plantInput.addEventListener('submit', searchPlant);

// function getPlantDetails(access_token) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Api-Key", apiKey);

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };

//     fetch(`https://plant.id/api/v3/kb/plants/${access_token}?details=name,url,description.,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods&lang=en`, requestOptions)
//         .then(response => response.json())
//         .then(result => updatePlantDetails(result))
//         .catch(error => console.log('error', error));
// }

// function updatePlantDetails(plantDetails) {
//     console.log(plantDetails);
//     const plantName = document.getElementById("plantName");
//     const description = document.getElementById("description");
//     const edibleParts = document.getElementById("edible_parts");
//     const watering = document.getElementById("watering");
//     const url = document.getElementById("url");
//     const image = document.getElementById("image");

//     if (plantName) {
//         plantName.textContent = plantDetails.name;
//     }

//     if (description) {
//         description.textContent = plantDetails.description.value;
//     }

//     if (edibleParts) {
//         edibleParts.textContent = `Edible Parts: ${plantDetails.edible_parts.join(", ")}`;
//     }

//     if (watering) {
//         watering.textContent = `Watering: ${plantDetails.watering.min} - ${plantDetails.watering.max} inches`;
//     }

//     if (url) {
//         url.href = plantDetails.url;
//     }

//     if (image) {
//         image.src = plantDetails.image.value;
//     }
// }


const apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As';

function searchPlant(event) {
    event.preventDefault();
    let plantName = document.getElementById('plantName').value;
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
            const access_token = result.entities[0].access_token;
            getPlantDetailsAndUpdate(access_token);
        })
        .catch(error => console.log('error', error));
}

function getPlantDetailsAndUpdate(access_token) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Api-Key", apiKey);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://plant.id/api/v3/kb/plants/${access_token}?details=name,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods&lang=en`, requestOptions)
        .then(response => response.json())
        .then(result => updatePlantDetails(result))
        .catch(error => console.log('error', error));
}

function updatePlantDetails(plantDetails) {
    const plantNameElement = document.getElementById("plantName");
    const descriptionElement = document.getElementById("description");
    const ediblePartsElement = document.getElementById("edible_parts");
    const wateringElement = document.getElementById("watering");
    const urlElement = document.getElementById("url");
    const imageElement = document.getElementById("image");

    if (plantNameElement) {
        plantNameElement.textContent = plantDetails.name;
    }

    if (descriptionElement) {
        descriptionElement.textContent = plantDetails.description.value;
    }

    if (ediblePartsElement && plantDetails.edible_parts) {
        ediblePartsElement.textContent = `Edible Parts: ${plantDetails.edible_parts.join(", ")}`;
    }

    if (wateringElement) {
        wateringElement.textContent = `Watering: ${plantDetails.watering.min} - ${plantDetails.watering.max} inches`;
    }

    if (urlElement) {
        urlElement.href = plantDetails.url;
    }

    if (imageElement) {
        imageElement.src = plantDetails.image.value;
    }

    // Add event listener to save button
    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener('click', () => {
        const comment = document.getElementById("comment").value;
        savePlantToProfile(plantDetails, comment);
    });
}

function savePlantToProfile(plantDetails, comment) {
    let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { plants: [] };

    userProfile.plants.push({ plant: plantDetails, comment: comment });
    localStorage.setItem('userProfile', JSON.stringify(userProfile));

    console.log("Plant saved to profile with comment:", plantDetails, comment);
}

const plantInputForm = document.getElementById('plantInput');
plantInputForm.addEventListener('submit', searchPlant);









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