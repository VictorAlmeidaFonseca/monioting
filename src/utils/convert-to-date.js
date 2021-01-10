const parseISO = require('date-fns/parseISO')

function parseCreateAtFieldToISO(field) {
    return  parseISO(field)    
}

module.exports = parseISO