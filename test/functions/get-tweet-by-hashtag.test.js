const { searchByQuery } = require('../../src/services/twitter')

const mockQuery = "#sre"

describe(`Twitter's services`, () => {

    it('should get twitter only by query filter', async () => {
      const response = await searchByQuery(mockQuery)
      expect(response.status).toEqual(200)     
      expect(response.data.data.some(data => data.text.includes(mockQuery))).toBe(true)     
    })  
})