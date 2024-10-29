import * as Sqlite from 'expo-sqlite';

const db = Sqlite.openDatabaseSync("organicDb.db");

export default db;