const server = require('../api/server');
const request = require('supertest');

describe('cohorts router', () => {
  it('should run the tests', () => {
    expect(true).toBe(true);
  });
  describe('Get / ', () => {
    test('should return 200 ok ', () => {
      return request(server)
        .get('/api/cohorts')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it('should return cohorts as the router value', function() {
      return request(server)
        .get('/api/cohorts')
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    test('should return cohorts as the router', async () => {
      const res = await request(server).get('/api/cohorts');
      expect(Array.isArray(res.body)).toBe(true);
    });
    test('should return Json', async () => {
      const res = await request(server).get('/api/cohorts');
      expect(res.type).toMatch(/json/);
    });
    it('should return an array of cohorts (async version)', async function() {
      const res = await request(server).get('/api/cohorts');

      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});
