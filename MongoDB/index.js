const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Sample").then(()=>{
    console.log("Connected to MongoDB successfully");
}).catch((err) =>{
    console.log(err);
})

const student = mongoose.Schema({
    name : String,
    workout : Boolean,
    age : Number
})

const Student = new mongoose.model("Student",student);

const adder = async ()=>{
    const ss = await Student.create({
        name : "Rohit",
        workout : true,
        age : 17
    })
}
adder();