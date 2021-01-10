function hasCharacters(character,string) {
    return new RegExp(character).test(string)
}

module.exports = hasCharacters