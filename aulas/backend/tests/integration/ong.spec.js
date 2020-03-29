const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG',()=>{
  beforeEach(async()=>{
    await connection.migrate.rollback(); 
    await connection.migrate.latest(); 
  });

  afterAll(async ()=>{
    await connection.destroy();
  });

  it('shoud be able to create a new ONG',async ()=>{
    const response = await request(app).post('/ongs').send({
      name: "Ong3",
      email: "contato@ong.com",
      whatsapp: "91981770073",
      city: "Salinópolis",
      uf: "PA"
    })   ;
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8) ;
  })
})