// Sample user data array
const contact = "We are a startup with no contact details!";

const getContact = (req, res) => {
  // Respond with the 
  res.json(contact);
};

module.exports = {
    getContact
};