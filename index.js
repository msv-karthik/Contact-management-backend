const express = require("express");
const errorHandler = require("./ExpressErrors/errorHandler");
const port = 3000; 
const app = express();
const mongoose = require("mongoose");
const mongo_url = 'mongodb://127.0.0.1:27017/contactManagement';
const dotenv = require("dotenv");

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

main()
.then(()=>{
    console.log("connected!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});