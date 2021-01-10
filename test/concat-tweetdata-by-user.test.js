const mockeTweetData = require('../mocks/get-serach-recent-sample.json')
const concatTweetsInfo = require('../src/data-transformations/concat-tweetdata-by-user')
fs = require('fs')

describe(`concat tweet data by user`, () => {

    it(`should join tweets's data and user information`, async () => {
      const expected = ['author_id','username','name','lang','created_at', 'tweet_id']  
      const result  = await concatTweetsInfo(mockeTweetData)

      fs.writeFile('/home/linkapi/projects/js/monitoring/mocks/concat-tweet-info.json', JSON.stringify(result, null, 2) , function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });  

      expect(Object.keys(result[0])).toEqual(expect.arrayContaining(expected))
    })  
})