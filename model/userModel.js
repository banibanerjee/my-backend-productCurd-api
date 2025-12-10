import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phno: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  pincode:{
    type:String,
    required:false,
  },
  orders: {
    type:String,
    required:false,
  }
});
export default mongoose.model("User", userSchema);
