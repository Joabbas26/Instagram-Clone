const User = require('../models/User');

const getAuthUser = async (req, res) => {
  try {
    // Find the user by the ID attached to the request object by the middleware
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from the response
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getAuthUser };