const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate unique ID', ()=>{
    it('should generate an unique ID',()=>{
        // expect(4 + 4).toBe(8)
        const id = generateUniqueId()
        expect(id).toHaveLength(8)
    })
})