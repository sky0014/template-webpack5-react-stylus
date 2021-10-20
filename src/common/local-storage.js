export default {
  get(key, defaultValue = null) {
    const value = localStorage.getItem(key);
    return value === null ? defaultValue : value;
  },

  set(key, value) {
    localStorage.setItem(key, value);
  },

  remove(key) {
    localStorage.removeItem(key);
  },
};
