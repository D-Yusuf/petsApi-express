const express = require('express');
const upload = require('../multer');
const router = express.Router();
const {getPets, addPet, getPet, deletePet} = require("./pets.controllers")
router.route("/")
    .get(getPets)
    .post(upload.single("image"), addPet)

router.route("/:id")
    .get(getPet)
    .delete(deletePet)




module.exports = router
// REFRENCE ⬇️

// const { postsGet, postsUpdate, postsDelete, postsCreate } = require('./posts.controllers');
  
// router.get('/', postsGet);
// router.post('/', upload.single("image") ,postsCreate);

// router.delete('/:postId', postsDelete);

// router.put('/:postId', postsUpdate);

// module.exports = router;