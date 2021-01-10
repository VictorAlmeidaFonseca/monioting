const mockeTweetData = require('../mocks/concat-tweet-info.json')
const groupyBy = require('../src/utils/groupy-by')
const convertToDate = require('../src/utils/convert-to-date')
const hasCharacter = require('../src/utils/has-characters')
fs = require('fs')

const mockString = "#sre"
const mockCharacter = "#"
const mockData = "01/01/2021"

describe('Test Utils Modules', () => {
    
    it('should hasCharacter', () => {
      const result = hasCharacter(mockCharacter, mockString)
      expect(result).toEqual(true)
    })

    it('should convert stringDate to date', () => {
        const result = convertToDate(mockData)
        expect(result).toBeInstanceOf(Date)
      })

    it('shoud groupy payload by author_id', () => {
       const result = groupyBy(mockeTweetData, 'author_id')
       fs.writeFile('/home/linkapi/projects/js/monitoring/mocks/tweet-info-grouped-by.json', JSON.stringify(result, null, 2) , function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });  


    })

})


