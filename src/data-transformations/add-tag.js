async function setTag(tag, tweetInfo){
    return Object.entries(tweetInfo).map(([username, tweets]) => {
        const { author_id, name } = tweets[0]       

        const userTweets= tweets.map(tweet => {
            const { username, author_id, name, ...userTweets } = tweet          
            return { ...userTweets, tags: [tag]}                                      
        })
         return { username, author_id, name, userTweets }
    })     
}

module.exports = setTag