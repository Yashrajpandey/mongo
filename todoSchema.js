const mongoose=require("mongoose")
  const { Schema } = mongoose;

  const todoSchema = new Schema({
    std_name:  String, // String is shorthand for {type: String}
    reg_num: String,
    marks: String
    
  });

  module.exports= mongoose.model("my todo",todoSchema,"SL-LAB-Todo")