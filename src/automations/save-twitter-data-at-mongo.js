require('dotenv').config()

const searchTweetsInfoByTag = require('../functions/search-tweetsinfo-by-tag')
const validadeTagAtTweet = require('../functions/validade-exist-tag-at-tweet')
const groupByTweetUsername = require('../data-transformations/groupy-by-username')
const concatTweetsDataAndUserData = require('../data-transformations/concat-tweetdata-by-user')
const addTag = require('../data-transformations/add-tag')
const parseCreateAtFieldToDate = require('../data-transformations/parse-create-date-field-to-date')  

module.exports = async () =>{

  const tags = process.env.HASHTAGS.split(',')

  for (const tag of tags) {
    try {
      const tweetsInfo = await searchTweetsInfoByTag(tag)
      const tweetsInfoValidated = await validadeTagAtTweet(tag, tweetsInfo)
      const groupedTweets = await groupByTweetUsername(tweetsInfoValidated)
      const tweetsAndUserInfo = await concatTweetsDataAndUserData(groupedTweets)
      const TaggedTweetsInfo = await addTag(tag, tweetsAndUserInfo)
      const parsedDateTweetsInfo = await parseCreateAtFieldToDate(TaggedTweetsInfo)

      
    } catch (error) {
      throw error
    }
  }


}