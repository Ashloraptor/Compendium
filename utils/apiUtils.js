// const fetch = require('node-fetch');

// function fetchDataWithApiKey(apiKey) {
//     return fetch('https://api.example.com/data', { //change this to fetch whatever
//         headers: {
//             'Authorization': `Bearer ${apiKey}`
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         return response.json();
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         throw error;
//     });
// }

// module.exports = { fetchDataWithApiKey };