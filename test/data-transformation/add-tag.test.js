const mockeTweetData = require('../../mocks/data-transformation/add-tag.mock.json')
const addTag = require('../../src/data-transformations/add-tag')

describe(`add tag at tweets`, () => {

    it(`should has a tag array field`, async () => {
      const expected = [true]  
      const result  = await addTag("sre", mockeTweetData)  
      expect(result.map(tweet => tweet.userTweets.every(usertw => usertw.tags.length)))
      .toEqual(expect.arrayContaining(expected))
    })  
})






  