// const router = require('express').Router();
// const { Plant, User } = require('../models');
// const withAuth = require('../utils/auth');

// // Route to display all plants
// router.get('/', async (req, res) => {
//   try {
    
//     const plantData = await Plant.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

   
//     const plants = plantData.map((plant) => plant.get({ plain: true }));

    
//     res.render('homepage', { 
//       plants, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //single plant by ID
// // router.get('/:id', async (req, res) => {
// //   try {

// //     const plantData = await Plant.findByPk(req.params.id, {
// //       include: [
// //         {
// //           model: User,
// //           attributes: ['username'],
// //         },
// //       ],
// //     });

// //     // If plant not found, return 404
// //     if (!plantData) {
// //       res.status(404).json({ message: 'Plant not found' });
// //       return;
// //     }

    
// //     const plant = plantData.get({ plain: true });

    
// //     res.render('plant', {
// //       ...plant,
// //       logged_in: req.session.logged_in || false,
// //     });
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });


// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Plant }],
//     });

//     // If user not found, return 404
//     if (!userData) {
//       res.status(404).json({ message: 'User not found' });
//       return;
//     }


  
//     const user = userData.get({ plain: true });

//     // Render profile page
//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/plants', async (req, res) => {
//     console.log("/plants")
//     res.render('plants');
  
// });

// router.get('/login', (req, res) => {
  
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   // Render login page
//   res.render('login');
// });

// module.exports = router;
