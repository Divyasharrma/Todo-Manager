const dns = require("dns");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        if (process.env.MONGO_URI?.startsWith("mongodb+srv://")) {
            dns.setServers(["8.8.8.8", "1.1.1.1"]);
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected ✅");
    } catch (error) {
        throw new Error(`MongoDB connection failed: ${error.message}`, {
            cause: error
        });
    }
};

module.exports = connectDB;