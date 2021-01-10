const convertToDate = require('../src/utils/convert-to-date')
const hasCharacter = require('../src/utils/has-characters')

const mockString = "#sre"
const mockCharacter = "#"
const mockData = "01/01/2021"

describe('Test Utils Modules', () => {
    
    test('should hasCharacter', () => {
      const result = hasCharacter(mockString, mockCharacter)
      expect(result).toEqual(true)
    })

    test('should convert stringDate to date', () => {
        const result = convertToDate(mockData)
        expect(result).toBeInstanceOf(Date)
      })

})