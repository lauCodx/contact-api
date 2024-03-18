const express = require("express");
const router = express.Router()
const {getContact, getContacts, deleteContact, updateContact, createContact} = require("../controllers/contactcontroller")

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);



module.exports = router;