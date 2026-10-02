import express from "express"
import bodyParser from "body-parser";
import envconfig from "./config/envConfig.js";
import db from "./config/db.js";

const port = envconfig.PORT;

const app = express();
         
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// app.use();

app.listen(port,(error)=>{
if(!error){
    console.log("server start .");
}
})