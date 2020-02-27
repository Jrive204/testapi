require('dotenv').config();

describe('server', () => {
  describe('environment', () => {
    test('should use testing env', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });
});
