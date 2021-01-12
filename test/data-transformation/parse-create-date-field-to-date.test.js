const mockeTweetData = require('../../mocks/data-transformation/parse-create-date-field-to-date.mock.json')
const parseToDate = require('../../src/data-transformations/parse-create-date-field-to-date')

fs = require('fs')

describe(`parse field do date`, () => {

    it(`should created_at be instandeOf Date`, async () => {
      const expected = [true] 
      const result  = await parseToDate(mockeTweetData)
      expect(result.map(tweet => tweet.userTweets.every(usertw => usertw.created_at instanceof Date)))
      .toEqual(expect.arrayContaining(expected))
    })  
})

  