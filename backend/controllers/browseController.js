// Sample user data array
const filtered = [
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

const getFiltered = (req, res) => {
  // Respond with the 
  res.json(filtered);
};

module.exports = {
    getFiltered
};