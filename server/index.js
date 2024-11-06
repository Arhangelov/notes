const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes");
const PORT = 5000;

const app = express();

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(5000, (err) =>{
    if(err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})