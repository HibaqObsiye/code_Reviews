const musicFilter = require('./lib/musicFilter.js')

describe("musicFilter", () => {
    it("return lower value 40", () =>{
        expect(musicFilter(40)).toEqual(40)
    })
})