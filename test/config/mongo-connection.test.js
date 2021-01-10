const database = require('../../src/config/db-connection')

describe('Should connect at mongodb Atlas', () => {

    beforeAll(async () => {
      await database.connect()
    })  

  it('should return ping with ok = 1', async () => {
      const response = await database.db().admin().ping()
      expect(response.ok).toEqual(1)
  })

    afterAll(async () => {
        await database.close()
    })

})


