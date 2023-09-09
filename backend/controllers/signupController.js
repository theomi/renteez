const signup = [
    {
        id: 1,
        Name: "Agrin",
        Password: "Student"
    },
    {
        id: 2,
        Name: "Theo",
        Password: "Student"
    },
    {
        id: 3,
        Name: "Muhammad",
        Password: "Student"
    },
    {
        id: 4,
        Name: "Yadullah",
        Password: "Student"
    }
];

let count = 4;

// Controller methods
const createUser = (req, res) => {
  const { Name, Password } = req.body;

  // Check if name and bio properties are present in the request body
  if (!Name || !Password) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }
count++;

  // Create a new user object
  const signupData = {
    id: count,
    Name,
    Password
  };

  // Add the new user to the users array
  signup.push(signupData);

  // Respond with the newly created user and HTTP status 201 (Created)
  res.status(201).json(signupData);
};


module.exports = {
    createUser
  };