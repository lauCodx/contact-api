const asyncHandler = require("express-async-handler");

const Contact = require("../models/contactModel")

//  @desc Get all contaacts
// @route GEt /api/contacts
// @public access

const getContacts = asyncHandler(async (req, res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts)
});

//  @desc Get contaact
// @route GET /api/contacts/:id
// @public access

const getContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(400);
        console.log("Contact not found!")
    }
    res.status(200).json(contact)
});

//  @desc create contact
// @route POST /api/contacts/:id
// @public access

const createContact = asyncHandler( async (req, res) =>{
    console.log('created', req.body)
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error('All fields are mandatory!')
    }
    const contact = await Contact.create({ 
        name,
        email,
        phone
    })
    res.status(201).json(contact)
});

//  @desc update contaacts
// @route PUT /api/contacts/:id
// @public access

const updateContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(400);
        throw new Error("Contact not found!")
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updateContact)
});
//  @desc Delete contaacts
// @route DELETE /api/contacts/:id
// @public access

const deleteContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        console.log("Contact not Found!")
    };
    await Contact.remove();
    res.status(200).json(Contact)
});


module.exports = {getContact, getContacts, deleteContact, updateContact, createContact}