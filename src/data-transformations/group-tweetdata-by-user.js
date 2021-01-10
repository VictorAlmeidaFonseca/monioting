
async function concatTweetDatatoTweetUserData(tweetsInfo){
    return tweetsInfo.data.map(tweet =>{
        const {author_id, lang, created_at } = tweet
        const { name, username } = tweetsInfo.includes.users.filter(user => user.id === author_id)[0]
         return { author_id,  username, name, lang, created_at }        
    })
}


module.exports = concatTweetDatatoTweetUserData