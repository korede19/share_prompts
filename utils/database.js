import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(
      "mongodb+srv://admin:5prddtz8sJ4ErX4Y@cluster0.heuqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    if (isConnected === true) {
      console.log("MongoDB is connected");
    }
  } catch (error) {
    console.log(error);
  }
};
