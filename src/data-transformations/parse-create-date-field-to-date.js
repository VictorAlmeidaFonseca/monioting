const convertToDate = require('../utils/convert-to-date')

async function parseCreateAtFieldToDate(tweetInfo) {
   
    for (const tweet of tweetInfo) {
        for (const userTweet of tweet.userTweets) {
            userTweet.created_at = convertToDate(userTweet.created_at)
        }
    }

    return tweetInfo
}

module.exports = parseCreateAtFieldToDate