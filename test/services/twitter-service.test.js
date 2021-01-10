const { searchByQuery } = require('../../src/services/twitter')
const twitter = require('../../src/config/twitter-connection')
const mockTwitterTittles = require('../mocks/twitter-tittles.json')

const params = {
    ids : mockTwitterTittles.ids
}

describe('Connect at twitter api', () => {   
   test('should return statusCode 200 ok', async () => {
        const response = await twitter.get('tweets', {params})     
        expect(response.status).toEqual(200)
        
   })  
})


const mockQuery = "#sre"

describe(`Twitter's services`, () => {

    it('should get twitter only by query filter', async () => {
      const response = await searchByQuery(mockQuery)
      expect(response.status).toEqual(200)    
      expect(response.data.data.some(data => data.text.includes(mockQuery))).toBe(true)     
    })  
})