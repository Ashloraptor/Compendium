const router = require('express').Router();
const { Plant, Category } = require('../../models');

// get all plants
router.get('/', async (req, res) => {
  // find all plants
  // be sure to include its associated Category data
  try {
    const plant = await Plant.findAll({
      include: [{ model: Category }],
    });
    res.status(200).json(plant);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one plant
router.get('/:id', async (req, res) => {
  // find a single plant by its `id`
  // be sure to include its associated Category data
  try {
    const plant = await Plant.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    if (!plant) {
      res.status(404).json({ message: 'No plant found by that ID' });
      return;
    }
    res.status(200).json(plant);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete one plant by its `id` value
  Plant.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPlant) => {
      res.json(deletedPlant);
    })
    .catch((err) => res.json(err));
});



// Create a new plant/save
router.post('/', async (req, res) => {
  try {
    // Assuming req.body contains the necessary data for creating a plant
    const newPlant = await Plant.create(req.body);
    res.status(201).json(newPlant);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
