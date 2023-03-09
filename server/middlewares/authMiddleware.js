const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    // Check if the authorization header exists and contains a valid JWT token
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify the JWT token and get the user ID from it
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    // Check if the user exists in the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Attach the user object to the request object for use in later middleware or controllers
    req.user = user;

    next();
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = authMiddleware;
