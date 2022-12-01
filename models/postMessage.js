import mongoose from "mongoose";

//
const schema = mongoose.Schema(
    {
       
        name:{
            type: String,
            required: true ['insert text!!']
        },
        email:{
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        message: {
            type: String,
            required: true

        }
    },
    {
        timeStamps: true
    }
)


const PostMessage= mongoose.model('Goal', schema)

export default PostMessage;