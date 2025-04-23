const mongoose = require("mongoose");
// const uri = "mongodb+srv://Adnan:adnan0702@cluster0.348bg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://Adnan:adnan0702@cluster0.348bg.mongodb.net/?appName=Cluster0";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, {
           
            
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;