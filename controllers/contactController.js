const wrapAsync = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc Get all contacts
// @route Get /api/contacts
// @access public

const getContacts = wrapAsync(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(201).json(contacts);
});

// @desc Get contact
// @route Get /api/contacts/:id
// @access public

const getContact = wrapAsync(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("not found");
    }
    res.status(201).json(contact);
});

// @desc Create new contacts
// @route Post /api/contacts
// @access public

const createContact = wrapAsync(async(req,res)=>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

// @desc Update contacts
// @route Put /api/contacts/:id
// @access public

const updateContact = wrapAsync(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
    );
    res.status(201).json(updatedContact);
});

// @desc Delete contacts
// @route Delete /api/contacts/:id
// @access public

const deleteContact = wrapAsync(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(201).json(contact);
});

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact};