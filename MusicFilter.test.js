const MusicFilter = require('./lib/musicFilter.js')

describe("MusicFilter", () => {
    it("return unmodified array if given input that matches upper and lower limit", () =>{
        const filter = new MusicFilter(40, 1000)

        expect(filter.frequencyCheck([40, 1000])).toEqual([40, 1000])
    })
})