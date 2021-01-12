const hasCharacter = require('../utils/has-characters')

async function validadeExistTagAtTweet(tag, tweetInfo) {
    const { users } = tweetInfo.includes
    const tweetsvalidateds = tweetInfo.data.map(tweet => {
        const hasTag = hasCharacter(tag, tweet.text)
        if(hasTag) return tweet
    }).filter(Boolean)
    
    return { data: tweetsvalidateds , users }
}

module.exports = validadeExistTagAtTweet