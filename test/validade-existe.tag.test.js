const validadeExistTagAtTweet = require('../src/functions/valiade-exist-tag-at-tweet')
const mockAlltwitters= require('../mocks/tweet-sre-tag.json')

const mockHashtag = "#sre"

describe('validadeExistTagAtTweet test function',() => {   
   it('should return only tweets with tag #sre', async () => {
        const response = await validadeExistTagAtTweet(mockHashtag, mockAlltwitters)    
        console.log(response);    
        expect(response.data.every(data => data.text.includes(mockHashtag))).toBe(true) 
        
   })  
})
