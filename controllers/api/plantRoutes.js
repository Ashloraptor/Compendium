// const express = require('express');
const router = require('express').Router();
// const router = express.Router();
const { Plant } = require('../../models');
// const withAuth = require('../../utils/auth');
// const { fetchDataFromAPI } = require('../../utils/apiUtils')

// router.get('/', async (req, res) => {
// // router.get('/plants', async (req, res) => {
//     try {
        
//         const plants = await Plant.findAll();
        
       
//         const enhancedPlants = await Promise.all(plants.map(async (plant) => {
//             const additionalData = await fetchDataFromAPI(plant.id); 
//             return { ...plant, additionalData }; 
//         }));

//         res.json(enhancedPlants);
//     } catch (error) {
//         console.error('Error fetching plants:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })

//Allows user to search new plant
router.post('/', async (req, res) => {
// router.post('/', withAuth, async (req, res) => {
    try {

        // Fetch plant from your database
        const plant = await Plant.findByPk(id);
        if (!plant) {
            return res.status(404).json({ error: 'Plant not found' });
        }
        
      
        const additionalData = await fetchDataFromAPI(id); // Assuming plant ID is used as a parameter
        const enhancedPlant = { ...plant, additionalData }; // Merge additional data with the plant object

        res.json(enhancedPlant);
    } catch (error) {
        console.error('Error fetching plant:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Allow user to delete posts
  router.delete('/:id', async (req, res) => {
//   router.delete('/:id', withAuth, async (req, res) => {
    try {
      const plantData = await Plant.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!plantData) {
        res.status(404).json({ message: 'No blogpost found with this id!' });
        return;
      }
  
      res.status(200).json(plantData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// router.get('/:id', async (req, res) => {
// // router.get('/plants/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         // Fetch plant from your database
//         const plant = await Plant.findByPk(id);
//         if (!plant) {
//             return res.status(404).json({ error: 'Plant not found' });
//         }
        
//         // Fetch additional data from the external API for this plant
//         const additionalData = await fetchDataFromAPI(id); // Assuming plant ID is used as a parameter
//         const enhancedPlant = { ...plant, additionalData }; // Merge additional data with the plant object

//         res.json(enhancedPlant);
//     } catch (error) {
//         console.error('Error fetching plant:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


// router.post('/', async (req, res) => {
// // router.post('/plants', async (req, res) => {
//     const { name, species, description } = req.body;
//     // const { name, species, description } = req.body;
//     try {
//         // Create a new plant in your database
//         const newPlant = await Plant.create({ name, species, description });
        
//         // Fetch additional data from the external API for the newly created plant
//         const additionalData = await fetchDataFromAPI(newPlant.id); // Assuming plant ID is used as a parameter
//         newPlant.additionalData = additionalData; // Add additional data to the new plant object

//         res.status(201).json(newPlant);
//     } catch (error) {
//         console.error('Error creating plant:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


// router.put('/:id', async (req, res) => {
// // router.put('/plants/:id', async (req, res) => {
//     const { id } = req.params;
//     const { plantId, plantName } = req.body;
//     // const { name, species, description } = req.body;
//     try {
//         const plant = await Plant.findByPk(id);
//         if (!plant) {
//             return res.status(404).json({ error: 'Plant not found' });
//         }
        
        
//         await plant.update({ plantId, plantName });
//         // await plant.update({ name, species, description });
        
        
//         const additionalData = await fetchDataFromAPI(id); 
//         plant.additionalData = additionalData;

//         res.json(plant);
//     } catch (error) {
//         console.error('Error updating plant:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


// router.delete('/:id', async (req, res) => {
// // router.delete('/plants/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
        
//         const plant = await Plant.findByPk(id);
//         if (!plant) {
//             return res.status(404).json({ error: 'Plant not found' });
//         }
        
       
//         await plant.destroy();
        
        

//         res.status(204).end();
//     } catch (error) {
//         console.error('Error deleting plant:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

module.exports = router;