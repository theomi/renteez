// Sample user data array
const about = "This is the about page!";

const getAbout = (req, res) => {
  try{
    res.json(about);
  } catch (err){
    res.status(500).json({ message: "Page not found" })
  }
  
};

module.exports = {
  getAbout
};