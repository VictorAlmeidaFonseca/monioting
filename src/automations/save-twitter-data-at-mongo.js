require('dotenv').config()

const searchTweetsInfoByTag = require('../functions/search-tweetsinfo-by-tag')
const validadeTagAtTweet = require('../functions/validade-exist-tag-at-tweet')
const groupByTweetUsername = require('../data-transformations/groupy-by-username')
const concatTweetsDataAndUserData = require('../data-transformations/concat-tweetdata-by-user')
const addTag = require('../data-transformations/add-tag')
const parseCreateAtFieldToDate = require('../data-transformations/parse-create-date-field-to-date') 
const getFollowersNumber = require('../functions/get-followers-user-data')
const { insertMany } = require('../dao/twitterDAO')  

module.exports = async () => {

  const tags = process.env.HASHTAGS.split(',')

  for (const tag of tags) {
    try {
      const tweetsInfo = await searchTweetsInfoByTag(tag)
      const tweetsInfoValidatedHasTag = await validadeTagAtTweet(tag, tweetsInfo)
      const groupedTweets = await groupByTweetUsername(tweetsInfoValidatedHasTag)
      const tweetsAndUserInfo = await concatTweetsDataAndUserData(groupedTweets)
      const taggedTweetsInfo = await addTag(tag, tweetsAndUserInfo)
      const parsedDateTweetsInfo = await parseCreateAtFieldToDate(taggedTweetsInfo)
      const tweetsUserAndFollowersInfo = await getFollowersNumber(parsedDateTweetsInfo)
      const saveTweetsAtMongo = await insertMany(tweetsUserAndFollowersInfo)
      return saveTweetsAtMongo
      
    } catch (error) {
      throw error
    }
  }
}