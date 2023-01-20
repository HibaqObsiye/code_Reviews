const musicFilter = require('./lib/musicFilter.js')

describe("musicFilter", () => {
    it("return lower value 40", () =>{
        expect(musicFilter(40)).toEqual(40)
    })

    it("returns higher value 1000", () => {
        expect(musicFilter(1000)).toEqual(1000)
    })

    it("returns 40 if value is greater than 40 but less than the higher value", () => {
        expect(musicFilter(99)).toEqual(40)
    })

    it("returns 1000 if value is greater than 1000 but less than the higher value", () => {
        expect(musicFilter(10001)).toEqual(1000)
    })
})