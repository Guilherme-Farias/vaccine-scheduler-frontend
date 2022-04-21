import { getStorageItem, setStorageItem } from '.';

describe('persistInStorage', () => {
  describe('localStorage', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    it('should return the item from localStorage', () => {
      const value = 'Test';
      const defaultValue = '';
      window.localStorage.setItem('MINHA_VACINA_test', JSON.stringify(value));
      expect(getStorageItem('test', defaultValue)).toStrictEqual(value);
    });

    it('should return default values with not find item in localStorage', () => {
      const defaultValue = '';
      expect(getStorageItem('test', defaultValue)).toStrictEqual(defaultValue);
    });

    it('should add the item to localStorage', () => {
      const value = 'Test';
      setStorageItem('test', value);

      expect(window.localStorage.getItem('MINHA_VACINA_test')).toStrictEqual(
        JSON.stringify(value),
      );
    });
  });

  describe('sessionStorage', () => {
    beforeEach(() => {
      window.sessionStorage.clear();
    });

    it('should return the item from sessionStorage', () => {
      const value = 'Test';
      const defaultValue = '';

      window.sessionStorage.setItem('MINHA_VACINA_test', JSON.stringify(value));
      expect(
        getStorageItem('test', defaultValue, 'sessionStorage'),
      ).toStrictEqual(value);
    });

    it('should return default values with not find item in localStorage', () => {
      const defaultValue = '';
      expect(
        getStorageItem('test', defaultValue, 'sessionStorage'),
      ).toStrictEqual(defaultValue);
    });

    it('should add the item to sessionStorage', () => {
      const value = 'Test';
      setStorageItem('test', value, 'sessionStorage');

      expect(window.sessionStorage.getItem('MINHA_VACINA_test')).toStrictEqual(
        JSON.stringify(value),
      );
    });
  });
});
