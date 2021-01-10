const { searchByQuery } = require('../services/twitter')

async function searchTweetsInfoByTag(tag) {
    try {        
      const tweetsInfo = await searchByQuery(tag)        
       return tweetsInfo       
    } catch (error) {
        throw error
    }
}

module.exports = searchTweetsInfoByTag
