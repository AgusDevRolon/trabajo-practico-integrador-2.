import { default as mongoose } from "mongoose";
import mongoose from "mongoose";

const starDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
    // await mongoose.connection.dropDatabase()
  } catch (error) {
    console.log(error);
    console.log("Error al conectar a la DB:", error);
    throw new Error(error);
  }
};