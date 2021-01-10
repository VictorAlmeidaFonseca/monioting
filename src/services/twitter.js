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

async function getTotalFollwersByUserId(id) {
    let followers = 0
         
    try {        
        do {
            const response = await twitter.get(`users/${id}/followers`)
            const { result_count } = response.data.meta
            followers += result_count          
            
            if(response.data.meta.next_token) {
                const params = { pagination_token : response.data.meta.next_token }
                const nextPage = await twitter.get(`users/${id}/followers`, { params })
                const { result_count } = nextPage.data.meta
                followers += result_count                        
            
            } else {
                break
            } 
        
        } while (true);  
      
        return followers

    } catch (error) {       
         throw error
       
    }
}

module.exports = { searchByQuery, getTotalFollwersByUserId }


