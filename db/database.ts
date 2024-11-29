import { useSQLiteContext } from 'expo-sqlite';

// Initialize the database and seed data
export async function initializeDatabase(db: any) {
  try {
    console.log("Initializing database...");

    // Drop and recreate the table
    await db.execAsync("DROP TABLE IF EXISTS history;");
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        date TEXT NOT NULL,
        procedure TEXT NOT NULL
      );
    `);

    // Seed data
    await seedDatabase(db);
    console.log("Database initialized and seeded successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

// Seed the database with sample data
async function seedDatabase(db: any) {
  try {
    await db.runAsync(`
      INSERT INTO history (title, description, date, procedure) VALUES
      ('Poultry Feed at Starter Stage', 'This feed mix is for poultry at the starter stage.', '2024-11-01', 'Mix feed and provide sufficient water.'),
      ('Pig Feed at Starter Stage', 'Pig feed mix for the starter stage.', '2024-11-02', 'Blend feed and ensure clean water availability.');
    `);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
