const { find } = require('../../dao/twitterDAO')

async function getTopFollowers(req, res) {
    try {
        const limit = req.params.limit ? req.params.limit : 5
        const sort = { followersNumber: -1 }
        const query = { limit, sort}     
        const getUsersHasMoreFollowers = await find(query)

        return res.status(200).json(getUsersHasMoreFollowers)
        
    } catch (error) {
        throw error
    }
}

async function sumBydate(req, res) {
   const query = [
       {"$unwind":"$userTweets"},
       {"$group" : "$created_at", "count":{$sum:1}},
       {"$project":{"$userTweets":1}}     
   ]       
    try {
        const groupTweetsByDay = await find(query)
        return res.status(200).json(getUsersHasMoreFollowers)

    } catch (error) {
        return res.status(400).json(error)
    }
} 
