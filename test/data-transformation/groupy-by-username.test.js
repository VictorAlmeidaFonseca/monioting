const mockeTweetData = require('../../mocks/data-transformation/groupy-by-username.mock.json')
const groupTweetsByUserName = require('../../src/data-transformations/groupy-by-username')


describe(`groupy by tweets by user name`, () => {

    it(`should join tweets's data and user information`, async () => {
      const expected = ['stollrealestate','BrianTRice']  
      const result  = await groupTweetsByUserName(mockeTweetData)  
      expect(Object.keys(result)).toEqual(expect.arrayContaining(expected))
    })  
})