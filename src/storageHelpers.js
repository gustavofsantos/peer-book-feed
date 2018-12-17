export function saveInLocalStorage(key, value, { format } = { format: 'json' }) {
  if (format === 'json') {
    try {
      const stringfied = JSON.stringify(value);
      localStorage.setItem(key, stringfied);
      return true
    } catch (error) {
      console.error(error);
      return false;
    }
  } else if (format === 'string') {
    localStorage.setItem(key, value);
    return true;
  }

  return false;
}

export function getFromLocalStorage(key, { format } = { format: 'json' }) {
  const stringItem = localStorage.getItem(key);

  if (format === 'json') {
    try {
      const item = JSON.parse(stringItem);
      return item;
    } catch (error) {
      console.error(error);
      return null;
    }
  } else if (format === 'string') {
    return stringItem;
  }

  return null;
}

export function saveInLocalDatabase(key, value, dbName) {

}

export function saveTurtleDb(key, value, turtle) {

}