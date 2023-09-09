// Sample user data array
const detail = [
    {
        id: 1,
        Name: "Agrin",
        Occupation: "Student"
    },
    {
        id: 2,
        Name: "Theo",
        Occupation: "Student"
    },
    {
        id: 3,
        Name: "Muhammad",
        Occupation: "Student"
    },
    {
        id: 4,
        Name: "Yadullah",
        Occupation: "Student"
    }
];

const getDetailsById = (req, res) => {
  const id = parseInt(req.params.id);

  // Find the user with the specified ID
  const info = detail.find(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (!info) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Respond with the user object
  res.json(info);
};

module.exports = {
    getDetailsById
};