import mongoose from "mongoose"
import envconfig from "./envConfig.js";
import { env } from "process";

const db = async()=>{
    try {
        await mongoose.connect(envconfig.MONGODB_URL);
        console.log("database connect .");
    } catch (error) {
        console.log(error.message);
    }
}

export default db();