// var plantSearch = document.querySelector(".plant-searchbutton");
// var plantName = document.querySelector(".plant-name");
// var apiURL = "";
// var API_KEY='bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As'
// var plantHistory = JSON.parse(localStorage.getItem("Compendium"))||[]


function identifyPlant(imageData) {
    
    const apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As'
    
    // Request body
    const requestBody = {
        images: [imageData], 
        details: 'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods', // Specify the requested plant details
        language: 'en', 
        async: true
    };

   
    fetch('https://plant.id/api/v3/identification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Api-Key ${apiKey}`
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        
        console.log('Plant identification response:', data);
        
        document.getElementById('output').innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error identifying plant:', error);
    });
}

// uploading plant picture
document.getElementById('imageInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(event) {
            // Get the base64 encoded image data
            var imageData = event.target.result;
            
            //function to identify the plant with the uploaded image data
            identifyPlant(imageData);
        };
        reader.readAsDataURL(file);
    }
});