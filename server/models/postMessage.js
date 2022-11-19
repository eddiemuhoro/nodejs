import mongoose from "mongoose";

//
const schema = mongoose.Schema(
    {
       
        name:{
            type: String,
            required: true ['insert text!!']
        },
        idNumber:{
            type: Number,
            required: true
        }
    },
    {
        timeStamps: true
    }
)


const PostMessage= mongoose.model('Goal', schema)

export default PostMessage;