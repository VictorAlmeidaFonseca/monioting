const { find } = require('../../dao/twitterDAO')

async function getTopFollowers(req, res) {
    try {
        const limit = req.params.limit ? req.params.limit : 5
        const sort = { length: -1 }
        const query = { limit, sort}     
        const getUsersHasMoreFollowers = await find(query)

        return res.status(200).json(getUsersHasMoreFollowers)
        
    } catch (error) {
        throw error
    }
}