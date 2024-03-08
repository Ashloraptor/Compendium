const router = require('express').Router();
const { Plant } = require('../../models');
const { fetchDataFromAPI } = require('../../utils/apiUtils');

// GET all plants
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.findAll();
        
        const enhancedPlants = await Promise.all(plants.map(async (plant) => {
            const additionalData = await fetchDataFromAPI(plant.id); 
            return { ...plant, additionalData }; 
        }));

        res.json(enhancedPlants);
    } catch (error) {
        console.error('Error fetching plants:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a single plant by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const plant = await Plant.findByPk(id);
        if (!plant) {
            return res.status(404).json({ error: 'Plant not found' });
        }
        
        const additionalData = await fetchDataFromAPI(id);
        const enhancedPlant = { ...plant, additionalData };

        res.json(enhancedPlant);
    } catch (error) {
        console.error('Error fetching plant:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new plant
router.post('/', async (req, res) => {
    const { name, species, description } = req.body;
    try {
        const newPlant = await Plant.create({ name, species, description });
        
        const additionalData = await fetchDataFromAPI(newPlant.id);
        newPlant.additionalData = additionalData;

        res.status(201).json(newPlant);
    } catch (error) {
        console.error('Error creating plant:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT update a plant by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, species, description } = req.body;
    try {
        const plant = await Plant.findByPk(id);
        if (!plant) {
            return res.status(404).json({ error: 'Plant not found' });
        }
        
        await plant.update({ name, species, description });
        
        const additionalData = await fetchDataFromAPI(id); 
        plant.additionalData = additionalData;

        res.json(plant);
    } catch (error) {
        console.error('Error updating plant:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a plant by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const plant = await Plant.findByPk(id);
        if (!plant) {
            return res.status(404).json({ error: 'Plant not found' });
        }
        
        await plant.destroy();

        res.status(204).end();
    } catch (error) {
        console.error('Error deleting plant:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;