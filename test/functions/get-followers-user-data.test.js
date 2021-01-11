const getFollowers = require('../../src/functions/get-followers-user-data')
fs = require('fs')

const tweet = [{
    "username": "LeoCDamascena",
    "author_id": "3191370449",
    "name": "Leandro Damascena",
    "userTweets": [
      {
        "tweet_id": "1348200745884069889",
        "lang": "en",
        "created_at": "2021-01-10T09:31:20.000Z",
        "text": "RT @MissAmyTobey: #sre transparency thread: what is your hourly consulting rate at which you would help Parler rebuild?\nfor example, mine i…",
        "tags": [
          "sre"
        ]
      }
    ]
  }]



describe('validadeExistTagAtTweet test function',() => {   
   it('should return only tweets with tag #sre', async () => {
        const response = await getFollowers(tweet)      
        // expect(response.data.every(data => data.text.includes(mockHashtag))).toBe(true) 

        fs.writeFile('/home/linkapi/projects/js/monitoring/mocks/functions/save-to-mongo.mock.json', JSON.stringify(response, null, 2), function (err,data) {
                if (err) {
                return console.log(err);
            }
            console.log(data);
        });
        
   })  
})
