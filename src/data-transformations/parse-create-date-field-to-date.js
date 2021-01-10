const convertToDate = require('../utils/convert-to-date')

async function parseCreateAtFieldToDate(tweetInfo) {
    return tweetInfo.map(info => {
       const  { tweet_id, author_id,  username, name, lang, created_at } = info      
       return { 
           name,
           lang,
           username,
           tweet_id,
           author_id,
           created_at: convertToDate(created_at)
    }})  
}

module.exports = parseCreateAtFieldToDate