require('dotenv').config()

const searchTweetsInfoByTag = require('../functions/search-tweetsinfo-by-tag')
const validade


const allTweets = require('../../mocks/all-tweets-by-search-tag.json')

fs = require('fs');


async function saveTweetsDataAtMongo() {
  try {
    
    const tags =  process.env.HASHTAGS.split(',')

    for(const tag of tags) {
      const tweetsInfo = await searchTweetsInfoByTag(tag)

    }
    
    
  } catch (error) {
    
  }
}

async function getDataByHasTag(arrayOfTags) {
    const news = []

    try {
      for (const tag of allTweets) {
   
       
         
         news.push(tweets)
           
      }

      fs.writeFile('/home/linkapi/projects/js/monitoring/mocks/all-tweets-by-search-tag.json', JSON.stringify(news, null, 2) , function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });

      return news 
        
    } catch (error) {
        throw error
    }
}


const test = (arr) =>  getDataByHasTag(arr)


test(HashTags)

// async function saveTwitterDataAtMongo ()  {
//     try {
           
        

        
//     } catch (error) {
        
//     }
// }



// for(const tag of HashTags) {
//     await
// }