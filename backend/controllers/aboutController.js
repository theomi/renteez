// Sample user data array
const about = "This is the about page!";

const getAbout = (req, res) => {
  // Respond with the 
  res.json(about);
};

module.exports = {
  getAbout
};