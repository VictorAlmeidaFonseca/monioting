require('dotenv').config()
const { MongoClient } = require('mongodb')

const options = { useNewUrlParser: true, useUnifiedTopology: true}
const client = new MongoClient(`${process.env.MONGO_URI}`, options)

module.exports = client
