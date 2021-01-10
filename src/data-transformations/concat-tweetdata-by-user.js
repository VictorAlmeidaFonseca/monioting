
async function concatTweetDatatoTweetUserData(tweetsInfo){
    return tweetsInfo.data.map(tweet => {
        const { author_id, lang, created_at, id: tweet_id, tags } = tweet
        const { name, username } = tweetsInfo.includes.users.filter(user => user.id === author_id)[0]
         return { tweet_id, author_id,  username, name, lang, created_at, tags }        
    })
}

module.exports = concatTweetDatatoTweetUserData