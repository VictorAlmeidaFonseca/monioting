const mockeTweetData = require('../mocks/get-serach-recent-sample.json')
const groupTweetsInfo = require('../src/data-transformations/group-tweetdata-by-user')

describe(`Group tweet data by user`, () => {

    it(`should join tweets's data and user information`, async () => {
      const expected = ['author_id','username','name','lang','created_at']  
      const result  = await groupTweetsInfo(mockeTweetData)
      expect(Object.keys(result[0])).toEqual(expect.arrayContaining(expected))
    })  
})