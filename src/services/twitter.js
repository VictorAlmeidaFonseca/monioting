const hasCharacter = require('../utils/has-characters')
const twitter = require('../config/twitter-connection')


async function getTweetsByHashtag(query) {

    const params = { query,  max_results: 100 }

    try {        
        const hasHashtag = hasCharacter(query, '#')        
        if(!hasHashtag) throw `query must be a hashtag!`

        const response = await twitter.get('tweets/search/recent', { params }) 
        return response

    } catch (error) {
        throw error
    }
}

module.exports = { getTweetsByHashtag }