// Sample user data array
const contact = "We are a startup with no contact details!";

const getContact = (req, res) => {
  try{
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: "Page not found" })
  }
  
};

module.exports = {
    getContact
};