/* eslint-disable no-prototype-builtins */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    }
  },
});

const LocaLooksDataIDB = {
  async getLocaLook(id) {
    if (id) {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    }
    return null;
  },

  async getAllLocaLooks() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putLocaLook(locaLook) {
    if (locaLook.hasOwnProperty('id')) {
      return (await dbPromise).put(OBJECT_STORE_NAME, locaLook);
    }
    return null;
  },

  async deleteLocaLook(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default LocaLooksDataIDB;
