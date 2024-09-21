const petSchema = require("../models/petShema");


const getPets = async(req, res)=>{
    try {
        const pets = await petSchema.find()
        return res.status(200).json(pets)
    } catch (error) {
        return res.status(500).json({error: error})
        
    }
}
const getPet = async(req, res)=>{
    try {
        const {id} = req.params
        const pet = await petSchema.findById(id)
        return res.status(201).json(pet)
    } catch (error) {
        return res.status(500).json({error: error})
        
    }
}

const addPet = async(req, res)=>{
    try {
        if(req.file){
            req.body.image = req.file.filename
            console.log(req.body)
        }
        const newPet = await petSchema.create(req.body)
        return res.status(201).json(newPet)
    } catch (error) {
        return res.status(500).json({error: error})
        
    }
}
const editPet = async(req, res)=>{
    try {
        const {id} = req.params
        const pet = await petSchema.findByIdAndUpdate(id, req.body)
        return res.status(200).json(pet)
        
    } catch (error) {
        
        return res.status(500).json({error: error})
    }
}
const deletePet = async(req, res)=>{
    try {
        const {id} = req.params
        const pets = await petSchema.findByIdAndDelete(id)
        return res.status(201).json({data: pets})
    } catch (error) {
        return res.status(500).json({error: error})
        
    }
}








module.exports = {getPets, addPet, getPet, editPet, deletePet}

// REFRENCE ⬇️

// exports.postsCreate = async (req, res) => {
//     try {
//       if(req.file){
//         console.log(req.file)
//         req.body.file = req.file.path
//       }
//       const newPost = await Post.create(req.body);
//       res.status(201).json(newPost);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   exports.postsDelete = async (req, res) => {
//     const { postId } = req.params;
//     try {
//       const foundPost = await Post.findById(postId);
//       if (foundPost) {
//         await foundPost.deleteOne();
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: "post not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   exports.postsUpdate = async (req, res) => {
//     const { postId } = req.params;
//     try {
//       const foundPost = await Post.findById(postId);
//       if (foundPost) {
//         await foundPost.updateOne(req.body);
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: "post not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   exports.postsGet = async (req, res) => {
//     try {
//       const posts = await Post.find();
//       res.json(posts);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  