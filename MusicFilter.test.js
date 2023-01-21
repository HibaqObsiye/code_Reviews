const musicFilter = require('./lib/musicFilter.js')

describe("musicFilter", () => {
    // it("return lower value 40", () =>{
    //     expect(musicFilter(40)).toEqual(40)
    // })

    // it("returns higher value 1000", () => {
    //     expect(musicFilter(1000)).toEqual(1000)
    // })

    // it("returns 40 if value is greater than 40 but less than the higher value", () => {
    //     expect(musicFilter(99)).toEqual(40)
    // })

    // it("returns 1000 if value is greater than 1000 but less than the higher value", () => {
    //     expect(musicFilter(10001)).toEqual(1000)
    // })

    it('returns 40 is below 40', () => {
        expect(musicFilter([60,40, 39],60,40)).toEqual([60,40, 40])
    })

    it('returns 60 if value is above 60', () => {
        expect(musicFilter([61,40, 40],60,40)).toEqual([60,40, 40])
    })
    it('returns 1000 if upper limit is 1000', () => {
        expect(musicFilter([60,10,45,60,1500],1000,40)).toEqual([60,40,45,60,1000])
    })

    it('returns 40 and 1000 when high value and low value parameters are not defined', () =>{
        expect(musicFilter([60,10,45,60,1500])).toEqual([60,40,45,60,1000])
    })
})