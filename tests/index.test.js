import { describe, expect } from '@jest/globals';
import request from 'supertest'

describe('GET /', () => {
  it('responds with 200 and "Up and running"', async () => {
    const res = await request('http://localhost:3000').get('/')
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Up and running');
  })
})
