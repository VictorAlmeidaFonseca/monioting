const { getFollwersByUserId } = require('../services/twitter')
const sleep = require('../utils/sleep')

async function getTotalFollowersByUserData(tweetsInfoData) {      
    try {
      const getFollowerUserData = await Promise.all(tweetsInfoData.map(async (tweets) => {  
        const followersNumber = await getfollowersData(tweets.author_id)      
        return { followersNumber, ...tweets }
      }))  

      return getFollowerUserData
        
    } catch (error) {
        throw error
    }
}

async function getfollowersData(id) {
    let total = 0
    let nextPage = true
    let params = {}  

    const response = await getFollwersByUserId(id)
    total += response.data.meta.result_count    
          
    if (response.data.meta.next_token) {
       params.pagination_token = response.data.meta.next_token   
       
       do {
        const nextPageData = await  getFollwersByUserId(id, params)
        total += nextPageData.data.meta.result_count
        
        params.pagination_token = nextPageData.data.meta.next_token
               
          hasLimitRate(nextPageData) 
        ?   await sleep(60000)
        :   await sleep(900000)

        if(!nextPageData.data.meta.next_token) nextPage = false    
       } while (nextPage)
    }

    return total
}

async function hasLimitRate(response) {
    return response.headers['x-rate-limit-remaining'] >= 2     
}

module.exports = getTotalFollowersByUserData