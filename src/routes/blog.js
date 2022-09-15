const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

router.get('/blog',(req,res)=>{
    res.json({ok:'blog'})
})

//fetch
router.get("/blog?page=&search=", async (req, res) => {
    const  blogs = await Blog.create({
        topic : req.body.topic,
        description: req.body.description,
        posted_at: req.body.posted_at,
        posted_by: req.body.posted_by
    });
    res.json ({
        status: "Success",
        result:blogs
    })
})

//create
router.post("/blog",async (req, res) => {
    try{
        const data = req.body;
        const blogs = await Blog.create(data)
         console.log(data)
         res.json({
        //    status: "Success",
          result:blogs
         });
    }catch(err){
        res.json({
        status: "some error",
       message: err.message
    }
    )}
   
})

//update
router.put("/blog/:id", async (req, res) => {
    try{
        const data = req.body;
        const blogs = await Blog.updateOne({_id:req.params.id},data)
        res.json({
            // status: "Success",
            result:blogs
        });
    }catch(err){
        res.json({
        status: "some error",
       message: err.message
    }
    )}
})

//delete
router.delete("/blog:id", async (req, res) => {
    try{
        const data = req.body;
        const blogs = await Blog.deleteOne({_id:req.params.id},data)
        res.json({
            status: "Success",
            result:blogs
        });
    }catch(err){
        res.json({
        status: "some error",
       message: err.message
    }
    )}
})



module.exports = router;