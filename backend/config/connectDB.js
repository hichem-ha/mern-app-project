const mongoose = require('mongoose');
require('dotenv').config()
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB is connected...');
    } catch (error) {
        console.log('DB is not connected');
    }
}
module.exports = connectDB;