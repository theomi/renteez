// Sample user data array
const userInfo = [
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

const getUserDetailById = (req, res) => {
    const id = parseInt(req.params.id);
  
    // Find the user with the specified ID
    const user = userInfo.find(u => u.id === id);
  
    // If the user is not found, respond with a 404 status code and a message
    if (!user) {
      return res.status(404).json({ message: "The user with the specified ID does not exist" });
    }
  
    // Respond with the user object
    res.json(user);
  };


const deleteUserById = (req, res) => {
  const id  = parseInt(req.params.id);

  // Find the index of the user with the specified ID
  const index = userInfo.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Remove the user from the array and store the deleted user
  const deleteduserInfo = userInfo.splice(index, 1)[0];

  // Respond with the deleted user
  res.json(deleteduserInfo);
};

const changeDetails = (req, res) => {
  const id  = parseInt(req.params.id);
  const { Name, Occupation } = req.body;

  // Find the index of the user with the specified ID
  const index = userInfo.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Check if name and bio properties are present in the request body
  if (!Name || !Occupation) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }

  // Update the user's name and bio
  userInfo[index].Name = Name;
  userInfo[index].Occupation = Occupation;

  // Respond with the updated user
  res.json(userInfo[index]);
};

module.exports = {
    getUserDetailById,
    deleteUserById,
    changeDetails
};