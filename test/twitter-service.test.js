const twitter = require('../src/services/twitter')
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
