'use strict'
const Contact = require('../model/contact')

async function getContacts(ctx){
  const contact = await Contact.find({})
  ctx.body = contact
}

async function getContact(ctx){
const id = ctx.params.contactId
console.log(ctx.params.contactId)
const contact = await Contact.findById(id)
console.log(contact)
ctx.body = contact
}

async function postContact(ctx){
  const clientContact = ctx.request.body;
  let contact = new Contact (clientContact);
  console.log(contact);
  const saveContact = await contact.save();
  ctx.body = saveContact
}


async function putContact(ctx){
  const id = ctx.params.contactId
  const contact = await Contact.findByIdAndUpdate(id, ctx.request.body)
  ctx.body = contact
}

async function deleteContact(ctx){
  const id = ctx.params.contactId
  const contact = await Contact.findById(id)
  const deletedContact = await contact.remove()

  ctx.body = deletedContact
}

module.exports={
  getContact,
  getContacts,
  postContact,
  putContact,
  deleteContact
}
