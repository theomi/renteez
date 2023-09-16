const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Connected to the database`);
}

module.exports = connectDB;