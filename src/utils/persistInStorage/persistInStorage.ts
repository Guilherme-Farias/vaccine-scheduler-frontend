type Storages = 'localStorage' | 'sessionStorage';
const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY || 'MINHA_VACINA';

function getStorageItem<T>(
  key: string,
  initialValue: T,
  storage: Storages = 'localStorage',
): T {
  const data = window[storage].getItem(`${STORAGE_KEY}_${key}`);
  return data ? JSON.parse(data) : initialValue;
}

function setStorageItem<T>(
  key: string,
  value: T,
  storage: Storages = 'localStorage',
) {
  const data = JSON.stringify(value);
  return window[storage].setItem(`${STORAGE_KEY}_${key}`, data);
}

function removeStorageItem(key: string, storage: Storages = 'localStorage') {
  return window[storage].removeItem(`${STORAGE_KEY}_${key}`);
}

export { getStorageItem, setStorageItem, removeStorageItem };
