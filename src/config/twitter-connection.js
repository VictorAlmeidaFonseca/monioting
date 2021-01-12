const axios = require('axios')

const twitter = axios.create({
    baseURL: 'https://api.twitter.com/2/',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${process.env.TWITTER_BAERER_TOKEN}`,
        'Access-Control-Request-Headers': 'authorization',
        'Access-Control-Allow-Headers' : '*/*'
    }
});

module.exports = twitter