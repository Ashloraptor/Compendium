// Start code referencing Whether_the_Weather
var searchForm = document.getElementById(search-form);
var searchInput = document.getElementById(search-input);
var rootEl = document.getElementById(root);

var plantIdApiRootUrl = 'https://plant.id/api/v3/kb/plants';
var apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As';

// Function to log the search input value
function searchPlant(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Retrieve the input value
    var inputValue = searchInput.value.trim();
    console.log("Searching ", inputValue); // Adjusted logging message
    // Don't search if input is empty
    if (inputValue == '') {
        console.log("Search input is empty.");
        return false; // Exit the function early
    } else{
    
    // Call function to search plant name
    searchPlantName(inputValue);
    // Clear input value after submit
    searchInput.value = '';
    }
}
function searchPlantName(plantName) {
    var myHeaders = new Headers();
    myHeaders.append("Api-Key", apiKey);
    myHeaders.append("Content-type", "application/json");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    // Construct URL for API request
    var url = `${plantIdApiRootUrl}/name_search?q=${plantName}`;
    // Fetch data from the API
    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            console.log("Search result:", result); // Logging the result
            // Further processing of the result if needed
        })
        .catch(error => {
            console.error('Error during search:', error.message);
            // Handle the error gracefully, e.g., show an error message to the user
        });
}
// Example function to render search result to the DOM
function renderResult(result) {
    // Clear previous search results
    rootEl.innerHTML = '';
    // Display search result
    var resultElement = document.createElement('div');
    resultElement.textContent = JSON.stringify(result);
    rootEl.appendChild(resultElement);
}
// Attach event listener to the form for submitting the search
searchForm.addEventListener("submit", searchPlant);