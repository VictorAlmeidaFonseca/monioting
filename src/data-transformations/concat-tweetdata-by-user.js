
async function concatTweetDatatoTweetUserData(tweetsInfo){
    return tweetsInfo.data.map(tweet => {
        const { author_id, lang, created_at, id: tweet_id, text } = tweet
        const { name, username } = tweetsInfo.users.filter(user => user.id === author_id)[0]
         return { tweet_id, author_id,  username, name, lang, created_at, text }        
    })
}

module.exports = concatTweetDatatoTweetUserData