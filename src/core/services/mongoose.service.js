import mongoose from "mongoose";

export default class MongooseService {
  static connect = async () =>
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "ticketsTest",
    });
}
