const validadeExistTagAtTweet = require('../../src/functions/validade-exist-tag-at-tweet')
const mockTweets= require('../../mocks/functions/validade-exist-tag-at-tweet-mock.json')

const mockHashtag = "#sre"

describe('validadeExistTagAtTweet test function',() => {   
   it('should return only tweets with tag #sre', async () => {
        const response = await validadeExistTagAtTweet(mockHashtag, mockTweets)      
        expect(response.data.every(data => data.text.includes(mockHashtag))).toBe(true) 
        
   })  
})
