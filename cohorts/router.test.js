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
    test('should return cohorts as the router', () => {
      return request(server)
        .get('/api/cohorts')
        .then(res => {
          expect(res.body.router).toBe('cohorts');
        });
    });
    test('should return cohorts as the router', async () => {
      const res = await request(server).get('/api/cohorts');
      expect(res.body.router).toBe('cohorts');
    });
    test('should return Json', async () => {
      const res = await request(server).get('/api/cohorts');
      expect(res.type).toMatch(/json/);
    });
  });
});
