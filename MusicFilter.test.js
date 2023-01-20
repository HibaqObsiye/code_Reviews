const musicFilter = require('./lib/musicFilter.js')

describe("musicFilter", () => {
    it("return lower value 40", () =>{
        expect(musicFilter(40)).toEqual(40)
    })

    it("returns higher value 1000", () => {
        expect(musicFilter(1000)).toEqual(1000)
    })
})