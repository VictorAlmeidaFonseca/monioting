const hasCharacter = require('../utils/has-characters')
const twitter = require('../config/twitter-connection')

const globalParams = { 
    'max_results': 100,  
    'expansions' : 'author_id',
    'tweet.fields' : 'created_at,lang,geo'
}

async function searchByQuery(query) {
    const customParams = { ...globalParams, query}    
    
    try {   
        const response = await twitter.get('tweets/search/recent', { params: customParams }) 
        return response

    } catch (error) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        throw error
    }
}

async function getFollwersByUserId(id, aditionalParams) {  
         
    try {        
       const response = await twitter.get(`users/${id}/followers`, { params : aditionalParams} )
       return response 
    } catch (error) {       
         throw error       
    }
}

module.exports = { searchByQuery, getFollwersByUserId }


