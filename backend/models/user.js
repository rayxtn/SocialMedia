import mongoose from "mongoose";

const Schema = mongoose.Schema();

 const UserSchema = new Schema ({
   User:{
    username :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
}

});
export default mongoose.Schema(User,UserSchema)