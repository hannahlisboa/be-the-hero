const resquest = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
describe('ONG', ()=>{
    beforeEach(async()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async ()=>{
        await connection.destroy()
    })
    it('should be able to create a new ONG', async()=>{
        const response = await resquest(app)
            .post('/ongs')
            .send({
                name: "oiee",
                email: "contato@xuxu.org.br",
                whatsapp: "5521985754523",
                city: "Rio de Janeiro",
                uf: "SP"
        })
        console.log(response.body)
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})