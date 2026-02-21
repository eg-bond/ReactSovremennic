export interface KaraokeSong {
  artist: string;
  id: string;
  song: string;
}

const DB_NAME = 'KaraokeDB';
const STORE_NAME = 'songs';
const DB_VERSION = 3;

class KaraokeDB {
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (db.objectStoreNames.contains(STORE_NAME)) {
          db.deleteObjectStore(STORE_NAME);
        }
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('artist', 'artist', { unique: false });
        store.createIndex('song', 'song', { unique: false });
      };
    });
  }

  async loadSongs(songs: KaraokeSong[]): Promise<void> {
    if (!this.db) await this.init();
    const tx = this.db!.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    songs.forEach(song => store.put(song));

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async getCount(): Promise<number> {
    if (!this.db) await this.init();
    const tx = this.db!.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.count();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async search(query: string, limit = 100): Promise<KaraokeSong[]> {
    if (!this.db) await this.init();
    if (!query.trim()) return this.getAll(limit);

    const tx = this.db!.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const results: KaraokeSong[] = [];
    const lowerQuery = query.toLowerCase();

    return new Promise((resolve, reject) => {
      const request = store.openCursor();

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor && results.length < limit) {
          const song = cursor.value as KaraokeSong;
          if (
            song.artist.toLowerCase().includes(lowerQuery) ||
            song.song.toLowerCase().includes(lowerQuery)
          ) {
            results.push(song);
          }
          cursor.continue();
        } else {
          resolve(results.sort((a, b) => Number(a.id) - Number(b.id)));
        }
      };

      request.onerror = () => reject(request.error);
    });
  }

  async searchAll(query: string): Promise<KaraokeSong[]> {
    if (!this.db) await this.init();
    if (!query.trim()) {
      const count = await this.getCount();
      const all = await this.getAll(count);
      return all;
    }

    const tx = this.db!.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const results: KaraokeSong[] = [];
    const lowerQuery = query.toLowerCase();

    return new Promise((resolve, reject) => {
      const request = store.openCursor();

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          const song = cursor.value as KaraokeSong;
          if (
            song.artist.toLowerCase().includes(lowerQuery) ||
            song.song.toLowerCase().includes(lowerQuery)
          ) {
            results.push(song);
          }
          cursor.continue();
        } else {
          resolve(results.sort((a, b) => Number(a.id) - Number(b.id)));
        }
      };

      request.onerror = () => reject(request.error);
    });
  }

  async getAll(limit = 100): Promise<KaraokeSong[]> {
    if (!this.db) await this.init();
    const tx = this.db!.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.getAll(undefined, limit);
      request.onsuccess = () => resolve(request.result.sort((a, b) => Number(a.id) - Number(b.id)));
      request.onerror = () => reject(request.error);
    });
  }
}

export const karaokeDB = new KaraokeDB();
