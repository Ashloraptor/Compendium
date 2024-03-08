// // Start code referencing Whether_the_Weather
// var searchHistory = [];
// var searchForm = document.getElementById("search-form");
// var searchInput = document.getElementById("search-input");
// var plantName = searchInput;
// var rootEl = document.getElementById("root");

// var plantIdApiRootUrl = 'https://plant.id/api/v3/kb/plants';
// var apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As';


// // Function to log the search input value
// function searchPlant(event) {
//     // Prevent the default form submission
//     event.preventDefault();
//     // Retrieve the input value
//     var inputValue = plantName.value.trim();
//     console.log("Searching ", plantName);
//     // don't search if search is empty
//     if (inputValue == '') {
//         return false;
//     } else {
//         //functions
//         searchPlantName(inputValue)

//         //clears input value after submit
//         searchInput.value = '';
//     }
// }

// function searchPlantName(plantName) {
//     var myHeaders = new Headers();
//     myHeaders.append("Api-Key", apiKey);
//     myHeaders.append("Content-Type", "application/json");

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };

//     var url = plantIdApiRootUrl + "name_search?q=" + plantName + requestOptions

//     fetch(url)
//     // .then(response => response.text())
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//     // Extract the access_token to incorporate into the next function in order to pull detailed searh
//     // getPlantDetail(accessToken)
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

// //Start code from plant.id API v3 GET Plants search
// var myHeaders = new Headers();
// myHeaders.append("Api-Key", "bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As");
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
// };

// fetch("https://plant.id/api/v3/kb/plants/name_search?q=", plantName, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// //End code 

// //Start code from plant.id API v3 GET Plant detail
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Api-Key", "bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As");

// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
// };

// fetch("https://plant.id/api/v3/kb/plants/ADQuTDRVfU1caQRidkdcbFlsZVVBdV1lBDVnUGJRaFk-?details=common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods&lang=en", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// //End code

// //Start code suggested by El in FC Discord
// async function getDataUrl(blob) => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader()
//         reader.onloadend = () => resolve(reader.result)
//         reader.onerror = reject
//         reader.readAsDataURL(blob)
//      });
// }

// const dataUrl = await getDataUrl(imageBlob)
// const base64Image = dataUrl.replace(/^.*base64,/,"");

// const apiRequestData = {
//     images: [base64Image],
//     // everything else
// }
// //End