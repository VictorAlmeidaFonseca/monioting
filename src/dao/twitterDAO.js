const database = require('../config/db-connection')

let db
let collection

async function setDbParams(){
  try {
    db = database.db(`${process.env.MONGO_DB}`)
    collection = db.collection(`${process.env.MONGO_COLLECTION}`)
    
  } catch (error) {
     throw error
  }
}

async function insertOne(body) {
    try {
      await setDbParams()

      const insert = await collection.insertOne(body)
      return insert        
    } catch (error) {
        throw error
    }
}

async function find(query) {
  try {

     await setDbParams()
     const find = await collection.findOne(query)
     return find

  } catch (error) {
    throw error
  }
}


module.exports = { insertOne, find }

