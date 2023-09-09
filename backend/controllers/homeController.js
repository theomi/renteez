// Sample user data array
const home = "This is the home page!";

const getHome = (req, res) => {
  // Respond with the 
  res.json(home);
};

module.exports = {
  getHome
};