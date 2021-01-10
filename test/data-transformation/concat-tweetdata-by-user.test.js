const mockeTweetData = require('../../mocks/data-transformation/concat-tweetdata-by-user.mock.json')
const concatTweetsInfo = require('../../src/data-transformations/concat-tweetdata-by-user')

fs = require('fs')

describe(`concat tweet data by user`, () => {

    it(`should join tweets's data and user information`, async () => {
      const expected = ['author_id','username','name','lang','created_at', 'tweet_id']  
      const result  = await concatTweetsInfo(mockeTweetData)
      expect(Object.keys(result[0])).toEqual(expect.arrayContaining(expected))
    })  
})