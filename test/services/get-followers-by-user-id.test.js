const { getTotalFollwersByUserId } = require('../../src/services/twitter')

const mockUserId = "1199680326806786048"

describe(`Twitter's services`, () => {

    it('should get followers by userId', async () => {
      const response = await getTotalFollwersByUserId(mockUserId)
      console.log(response.headers)
      expect(response.length).toEqual(119)         
    }) 
  
})