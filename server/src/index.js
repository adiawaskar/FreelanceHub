const dotenv = require('dotenv');
import connectDB from "./db/index.js";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        
    });
})
.catch((err) => {
    console.log("Mongo DB Connection Failed: ", err);
    
})