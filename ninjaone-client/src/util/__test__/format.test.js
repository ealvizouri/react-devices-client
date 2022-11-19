import { commaSeparated } from '../format';

describe('format functions: commaSeparated', () => {
  test('formats 1200500 into 1,200,500', async () => {
    const commaSeparatedNumber = commaSeparated('1200500');
      expect(commaSeparatedNumber).toBe('1,200,500');
  });
  
  test('formats 900 into 900', async () => {
    const commaSeparatedNumber = commaSeparated('900');
      expect(commaSeparatedNumber).toBe('900');
  });
});
