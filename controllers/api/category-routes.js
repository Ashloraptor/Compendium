// const router = require('express').Router();
// const { Category, Plant } = require('../../models');

// // The `/api/categories` endpoint

// router.get('/', async (req, res) => {
//   // find all categories
//   // be sure to include its associated Plants
//   try {
//     const category = await Category.findAll({
//       include: [{ model: Plant }],
//     });
//     res.status(200).json(category);
//   } catch (err) {
//     res.status(500).json(err);
//   }

// });

// router.get('/:id', async (req, res) => {
//     // find one category by its `id` value
//     // be sure to include its associated Plants
//     try {
//       const category = await Category.findByPk(req.params.id, {
//         include: [{ model: Plant }],
//       });
//       if (!category) {
//         res.status(404).json({ message: 'No category found by that ID' });
//         return;
//       }
//       res.status(200).json(category);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.delete('/:id', (req, res) => {
//     // delete a category by its `id` value
//     Category.destroy({
//       where: {
//         category_id: req.params.id,
//       },
//     })
//       .then((deletedCategory) => {
//         res.json(deletedCategory);
//       })
//       .catch((err) => res.json(err));
//   });
  
//   module.exports = router;
  