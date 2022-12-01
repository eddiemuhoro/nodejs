import express from 'express'
import PostMessage from '../models/postMessage.js'
const router =express.Router()

//CREATE USER
//REQ.BODY TO GET DATA FROM THE CLIENT


router.post('/new', async (req, res)=>{
    const post = req.body
    const newPost = new PostMessage(post)

    
    try {
        newPost.save()
    } catch (error) {
        console.log('error');
    }
    // try{
    //     await newPost.save()
    //     res.status(201).json(newPost)
    // }catch(error){
    //    res.status(400).json({message: error.message})
    // }
})

//GET ALL USERS
//.FIND() TO GET ALL USERS FROM MONGOOSE SCHEMA

router.get('/', async (req, res)=>{
    try {
        const getData = await  PostMessage.find();
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
   
})


//individual user :id
//req.params.id to get the specific identity


//simplified code
router.route('/:id').get((req, res)=>{
    res.send(`individual user with id ${req.params.id}`)
}).put( async(req, res)=>{
    const data = await PostMessage.findById(req.params.id)
    if(!data){
        console.log("no data found");
        res.status(400).send("No data found")
    }
    const updatedData = await PostMessage.findByIdAndUpdate(req.params.id, 
        req.body, {
            new: true
        })
    res.json(updatedData)
}).delete( async (req, res)=>{
    const data = await PostMessage.findById(req.params.id)
    if(!data){
        console.log("no data found");
        res.status(400).send("Oops no data found")
    }

    data.remove()
    res.send(`Deleted user with id ${req.params.id}`)
})



//.param?? find id >= run code
const users=[
    {
        firstName: "John",
        lastName: "Doe",
        age: 21
    }
    ]
//middle ware, insert it to another function, get executed then the next function follows;
router.param('id', (req,res,next,id)=>{
    req.find = users[id]
    next()
})
export default router