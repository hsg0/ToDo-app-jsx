import mongoose from "mongoose";

export const ConnectDB = async () => {
  // Check if there is already a connection to avoid creating multiple connections
  if (mongoose.connection.readyState >= 1) {
    console.log("Database is already connected");
    return;
  }

  try {
    // Connect to MongoDB using the connection string
    await mongoose.connect('mongodb+srv://hsg001:jkEyl7COlwTQrucP@cluster0.jvem1.mongodb.net/todo-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};