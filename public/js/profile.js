async function createPlant(plantData) {
  try {
    const response = await fetch('/api/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantData),
    });

    if (!response.ok) {
      throw new Error('Failed to create plant');
    }

    const newPlant = await response.json();
    console.log('New plant created:', newPlant);
  
  } catch (error) {
    console.error('Error creating plant:', error.message);
  }
}

//   document.addEventListener("DOMContentLoaded", (event) => {
//   const plantForm = document.getElementById('plantInput');

//   plantForm.addEventListener('submit', async (event) => {
//     event.preventDefault(); 

//     const formData = new FormData(plantForm);
//     const plantData = Object.fromEntries(formData.entries()); 

//     await createPlant(plantData);
//   });
// });
const plantForm = document.getElementById('search-form');
console.log(plantForm);
if(plantForm){
console.log("Ready");

plantForm.addEventListener('submit', async (event) => {
  console.log("search");
  event.preventDefault(); 

  const formData = new FormData(plantForm);
  const plantData = Object.fromEntries(formData.entries()); 

  await createPlant(plantData);
});
};