const express = require("express");
const router = express.Router();
const {getContacts,getContact,createContact,updateContact,deleteContact} = require("../controllers/contactController");



router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// *** this is also same as above - just another way of writing***
// router.get("/",(req,res)=>{
//     res.status(200).json({message: "Get all contacts"});
// });

// router.get("/",(req,res)=>{
//     res.status(200).json({message: `Get the contact with id: ${req.params.id}`});
// });

// router.post("/",(req,res)=>{
//     res.status(200).json({message: "Create contacts"});
// });

// router.put("/:id",(req,res)=>{
//     res.status(200).json({message:`Update contact for id: ${req.params.id}`});
// });

// router.delete("/:id",(req,res)=>{
//     res.status(200).json({message:`Delete the contact for id: ${req.params.id}`});
// });

// router.route("/").get(getContacts);
// router.route("/:id").get(getContact);
// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;