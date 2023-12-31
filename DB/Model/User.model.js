import mongoose, {Schema, model} from "mongoose";

const UserSchema = new Schema({
    userName:{
        type: String,
        min: 4,
        max: 20,
        required: true 
    },
     email : {
        type: String,
        required: true,
        unique: true
     },
     password : {
        type: String,
        required: true
     },
     image: { 
        type: Object,
        required: true
     },
     phone : {
        type: String
     },
      address : {
        type: String
      },
      confirmEmail:{
        type: Boolean,
        default: false
      },
      gender :{
        type : String,
        enum : ['Female', 'Male']
      },
      status : {
        type : String,
        default : 'Active',
        enum : ['Active', 'Inactive']
      },
      role: {
        type : String,
        default: 'User',
        enum : ['User', 'Admin']
      },
      sendCode:{
        type: String,
        default: null
      }
},
{ 
    timestamps : true
})

const UserModel = mongoose.models.User || model('User', UserSchema)
export default UserModel