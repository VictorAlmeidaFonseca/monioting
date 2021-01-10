const twitter = require('../../src/config/twitter-connection')

const params = {
    ids : "1347616021134372864"
}

describe('Connect at twitter api', () => {   
   test('should return statusCode 200 ok', async () => {
        const response = await twitter.get('tweets', {params})     
        expect(response.status).toEqual(200)
        
   })  
})
