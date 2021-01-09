const { insertOne, find } = require('../src/dao/twitterDAO')
const database = require('../src/config/db-connection')

mockDocument = {
    "id": Math.random(),
    "model": "test",
    "date": new Date()
}

describe('TwitterDAO CRUD test', () => {

       beforeAll(async () => {
        await database.connect()
       })

       test('It should Insert document at database', async () => {
         const insertDoc = await insertOne(mockDocument)
         expect(insertDoc.insertedCount).toEqual(1)
       })

       test('It should Find the mockDocument at database', async () => {
        const { id } = mockDocument              
        const findDoc = await find({id})    
        expect(findDoc).toEqual(mockDocument)
      })

      
       afterAll(async() => {
        await database.close()
      })     
  
})
