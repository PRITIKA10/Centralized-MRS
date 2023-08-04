const jwt = require('jsonwebtoken');
require("dotenv").config();


// Authenticating JWT token for protected routes
function authenticateJWT(req, res, next) {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
  
      // Attach user information to the request for future use
      req.user = user;
      next();
    });
  }

// Generating JWT token for differe'nt types of users
function generateToken(userId, role) {
    const payload = {
      userId,
      role, // Include the user's role as a claim
      // ... other claims
    };
  
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'});
  }

// Saving role in JWT token
module.exports = {
    generateToken,
    authenticateJWT
}