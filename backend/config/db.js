const mongoose = require("mongoose");
const colors = require("colors");

let memoryServer;

const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;

    if (process.env.USE_MEMORY_DB === "true" && process.env.NODE_ENV !== "production") {
      const { MongoMemoryServer } = require("mongodb-memory-server");
      memoryServer = await MongoMemoryServer.create();
      mongoUri = memoryServer.getUri();
      console.log("Using in-memory MongoDB for local development".yellow.bold);
    }

    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
