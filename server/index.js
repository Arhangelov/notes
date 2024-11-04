const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes");
const PORT = 3000;

const app = express();

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({  extended: true }));
app.use(router);

app.listen(3000, (err) =>{
    if(err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})