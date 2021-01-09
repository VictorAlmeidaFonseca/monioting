const { getTweetsByHashtag } = require('../src/services/twitter')

const mockHashtag = "#sre"

describe(`Twitter's services`, () => {

    it('should get twitter only by hashtag', async () => {
      const response = await getTweetsByHashtag(mockHashtag)
      expect(response.status).toEqual(200)    
      expect(response.data.data.some(data => data.text.includes(mockHashtag))).toBe(true)     
    })

    it('should throw erro: not hashtag', async () => {
        try {
          const response = await getTweetsByHashtag('')
         } catch (error) {
            expect(error).toEqual("query must be a hashtag!")   
        }
    })
  
})