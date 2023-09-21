const jwt = require("jsonwebtoken");

function generateAuthToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

/*function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token is missing." });
  }

  try {
    const decoded = jwt.verify(
      token,
      c86c9f15c68fc6df87bb99df6c133dc65e403686b8433f027ff7b1375151892d
    ); // Replace 'your-secret-key' with your actual secret key
    req.user = decoded; // Add user information to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
}
*/
module.exports = { generateAuthToken };
