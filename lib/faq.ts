import Connection from "@/database/organicDb";

export const createUserPreferencesTable = async (db: SQLiteDatabase) => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS UserPreferences (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL
      );
    `;
  
    try {
      await db.executeSql(createTableQuery);
      console.log("UserPreferences table created successfully.");
    } catch (error) {
      console.error("Failed to create UserPreferences table:", error);
      throw Error("Failed to create UserPreferences table");
    }
  };
  