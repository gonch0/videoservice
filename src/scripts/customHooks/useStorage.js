export function useStorage() {
  const getDataFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const setDataToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeDataFromStorage = (key) => {
    localStorage.removeItem(key);
  };

  return {
    getDataFromStorage,
    setDataToStorage,
    removeDataFromStorage,
  };
}
