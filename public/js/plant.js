const apiKey = 'bdKVmf7eGU9F7pThLHlHOPG5axdB1pdPscutn0vB5EMdg6Y4As'; // Replace with your actual API key
let accessToken = null; // Access token will be obtained dynamically

// Function to handle plant creation
async function createPlant(plantData) {
    try {
        // Dynamically obtain access token if not already available
        if (!accessToken) {
            accessToken = await getAccessToken();
        }
        
        const response = await fetch('http://localhost:3001/api/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(plantData)
        });

        if (!response.ok) {
            throw new Error('Failed to create plant');
        }

        const result = await response.json();
        console.log('Plant created successfully:', result);
    } catch (error) {
        console.error('Error creating plant:', error.message);
    }
}

// Function to dynamically obtain access token
async function getAccessToken() {
    try {
        // Make request to obtain access token
        const response = await fetch('https://example.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-Key': apiKey // Include API key if required by the authentication method
            },
            body: JSON.stringify({
                grant_type: 'client_credentials',
                client_id: 'your_client_id',
                client_secret: 'your_client_secret'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to obtain access token');
        }

        const result = await response.json();
        return result.access_token;
    } catch (error) {
        console.error('Error obtaining access token:', error.message);
        return null;
    }
}

// Function to search for plants by coordinates
async function searchPlantsByCoordinates(latitude, longitude) {
    try {
        if (!accessToken) {
            accessToken = await getAccessToken();
        }
        
        const response = await fetch(`https://plant.id/api/v3/kb/plants/nearby?lat=${latitude}&lon=${longitude}`, {
            headers: {
                'Api-Key': apiKey,
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to search for plants');
        }

        const result = await response.json();
        console.log('Search result:', result);
    } catch (error) {
        console.error('Error searching for plants:', error.message);
    }
}

// Event listener for form submission
const plantInputForm = document.getElementById('plantInput');
plantInputForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const plantName = document.getElementById('plantName').value;
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    await createPlant({ name: plantName, latitude, longitude });
});

// Example usage: Search for plants near a specific location
searchPlantsByCoordinates(40.7128, -74.0060); // Example coordinates for New York City
