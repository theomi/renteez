// Sample user data array
const listings = [
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

let count = 4;

// Controller methods
const addListing = (req, res) => {
  const { Name, Occupation } = req.body;

  // Check if name and bio properties are present in the request body
  if (!Name || !Occupation) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }
count++;

  // Create a new user object
  const newListing = {
    id: count,
    Name,
    Occupation
  };

  // Add the new user to the users array
  listings.push(newListing);

  // Respond with the newly created user and HTTP status 201 (Created)
  res.status(201).json(newListing);
};


const getAllListings = (req, res) => {
  // Respond with the array of users
  res.json(listings);
};



const deleteListing = (req, res) => {
  const id  = parseInt(req.params.id);

  // Find the index of the user with the specified ID
  const index = listings.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Remove the user from the array and store the deleted user
  const deletedListings = listings.splice(index, 1)[0];

  // Respond with the deleted user
  res.json(deletedListings);
};

const changeListingDetails = (req, res) => {
    const id  = parseInt(req.params.id);
  const { Name, Occupation } = req.body;

  // Find the index of the user with the specified ID
  const index = listings.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Check if name and bio properties are present in the request body
  if (!Name || !Occupation) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }

  // Update the user's name and bio
  listings[index].Name = Name;
  listings[index].Occupation = Occupation;

  // Respond with the updated user
  res.json(listings[index]);
};

module.exports = {
  addListing,
  getAllListings,
  deleteListing,
  changeListingDetails,
};