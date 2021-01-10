const convertToDate = require('../utils/convert-to-date')

async function parseCreateAtFieldToDate(tweetInfo) {
    const parsedTweetInfo = tweetInfo

    for (const info of parsedTweetInfo) {
        await convertToDate(info.created_at)
    }
    
    return parsedTweetInfo
}

module.exports = parseCreateAtFieldToDate