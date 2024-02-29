// Start code referencing Whether_the_Weather
// var searchForm = document.getElementById("search-form");
// var searchInput = document.getElementById("search-input");
// var plantImage = searchInput;

// var plantIdApiRootUrl = 'https://plant.id/api/v3';
// var apiKey = bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As;

// // Function to log the search input value
// function searchPlant(event) {
//   // Prevent the default form submission
//   event.preventDefault();
//   // Retrieve the input value
//   var inputValue = plantImage.value.trim();

//     //don't search if search is empty
//     if (inputValue == '') {
//         return false;
//     } else {
//         //functions
//         getResults(inputValue)
//         //clears input value after submit
//         searchInput.value = '';
//     }
// }

// function getResults(plant) {
//     var url = plantIdApiRootUrl + "?q="
// }
// End code

// //Start code from plant.id API v3 documentation GET Retrieve Identification
// var myHeaders = new Headers();
// myHeaders.append("Api-Key", "bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As");
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };
// var base64 = ""

// fetch("https://plant.id/api/v3/identification/AxDT9RawIwfX3fT?details=common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering &language=en", requestOptions, base64)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//   //console.log(response)
//   // End code

//Start code from plant.id API v3 GET Plants search
var myHeaders = new Headers();
myHeaders.append("Api-Key", "bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://plant.id/api/v3/kb/plants/name_search?q=",plantName, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//End code 
