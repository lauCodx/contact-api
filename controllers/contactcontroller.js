const asyncHandler = require("express-async-handler");

//  @desc Get all contaacts
// @route GEt /api/contacts
// @public access

const getContacts = asyncHandler(async (req, res) =>{
    res.status(200).json({message: 'Get all contacts'})
});

//  @desc Get contaact
// @route GET /api/contacts/:id
// @public access

const getContact = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Get contact ${req.params.id}`})
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
    res.status(201).json({message: `Created contact`})
});

//  @desc update contaacts
// @route PUT /api/contacts/:id
// @public access

const updateContact = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Updated contact ${req.params.id}`})
});
//  @desc Delete contaacts
// @route DELETE /api/contacts/:id
// @public access

const deleteContact = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Deleted contact ${req.params.id}`})
});


module.exports = {getContact, getContacts, deleteContact, updateContact, createContact}