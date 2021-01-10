const groupyBy = require('../utils/groupy-by')

async function groupbyUserName(tweetInfo) {
    return groupyBy(tweetInfo, 'username')
}

module.exports = groupbyUserName