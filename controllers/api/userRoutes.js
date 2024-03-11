const router = require('express').Router();
const { User } = require('../../models'); // Import the User model

// User Creation Route
router.post('/', async (req, res) => {
  try {
    // Create a new user with the data from the request body
    const userData = await User.create(req.body);

    // Save the user's session, marking them as logged in
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Respond with the created user data
      res.status(200).json(userData);
    });
  } catch (err) {
    // If an error occurs during user creation, respond with a 400 status code and the error
    res.status(400).json(err);
  }
});

// User Login Route
router.post('/login', async (req, res) => {
  try {
    // Find a user with the provided email
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no user is found with the provided email, respond with a 400 status code and a message
    if (!userData) {
      return res.status(400).json({ message: 'Incorrect email, please try again' });
    }

    // Check if the provided password matches the stored password hash
    const validPassword = await userData.checkPassword(req.body.password);

    // If the password is incorrect, respond with a 400 status code and a message
    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect password, please try again' });
    }

    // If the login is successful, save the user's session and respond with the user data and a success message
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    // If an error occurs during the login process, respond with a 400 status code and the error
    res.status(400).json(err);
  }
});

// User Sign-up Route
router.post('/signup', async (req, res) => {
  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ where: { email: req.body.email } });

    // If the email is already in use, respond with a 400 status code and a message
    if (existingUser) {
      return res.status(400).json({ message: 'Email address is already in use. Please use a different email or sign in.' });
    }

    // Create a new user with the data from the request body
    const newUser = await User.create(req.body);

    // Save the user's session, marking them as logged in
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      // Respond with the created user data
      res.status(201).json(newUser);
    });
  } catch (err) {
    // If an error occurs during user creation, respond with a 400 status code and the error
    res.status(400).json(err);
  }
});

// User Logout Route
router.post('/logout', (req, res) => {
  // If the user is logged in, destroy their session
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end(); // Respond with a 204 status code (No Content)
    });
  } else {
    // If the user is not logged in, respond with a 404 status code (Not Found)
    res.status(404).end();
  }
});

module.exports = router;
