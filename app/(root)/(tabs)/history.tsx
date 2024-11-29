import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button, Modal, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import Footer from '@/components/Footer';

// Function to initialize the database (drop and recreate the table)
async function initializeDatabase(db: any) {
  try {
    console.log("Initializing database...");

    // Drop the existing table (if it exists)
    await db.execAsync("DROP TABLE IF EXISTS history;");

    // Recreate the table with the new schema (adding 'procedure' column)
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

    // Seed database with initial data
    await seedDatabase(db);
    console.log("Database initialized and seeded successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

// Function to seed the database with initial data
async function seedDatabase(db: any) {
  try {
    await db.runAsync(`
      INSERT INTO history (title, description, date, procedure) VALUES
      ('Poultry Feed at Starter Stage', 
      'This feed mix is for poultry at the starter stage. It is designed to promote rapid growth and development.', 
      '2024-11-01', 
      'Mix the feed ingredients and provide sufficient water for proper digestion.'),

      ('Pig Feed at Starter Stage', 
      'Pig feed mix for the starter stage, which includes rice bran, copra meal, and greens.',
      '2024-11-02',
      'Ensure the feed mixture is well-blended and the pigs have access to clean water.'),

      ('Shared Crude Protein - Sample Usage', 
      'This is a sample usage of ingredients for feed formulation with Crude Protein details.',
      '2024-11-28',
      'Ingredients: Corn Grits: 22kg - 16.50%, Sweet Potato: 15kg - 0.75%, Bone Meal: 10kg - 2.30%. Total Average of Shared Crude Protein: 19.95%.'),

      ('Cattle Feed at Finisher Stage', 
      'Feed mix for cattle at the finisher stage designed to promote weight gain while preparing for market.', 
      '2024-11-15', 
      'Combine ingredients in the correct ratio, provide enough water, and ensure the cattle are kept in a clean, dry area.'),

      ('Goat Feed at Growth Stage', 
      'This feed mix is intended for goats at the growth stage to ensure they develop properly.', 
      '2024-11-18', 
      'Blend the ingredients thoroughly and offer the feed in several small meals throughout the day.');
  `);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

// History screen that fetches and displays data
const History = () => {
  const db = useSQLiteContext(); // Get the SQLite database context
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const result = await db.getAllAsync('SELECT * FROM history');
        setHistoryData(result);
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchData();
  }, [db]);

  const deleteHistory = async (id: number) => {
    try {
      await db.runAsync('DELETE FROM history WHERE id = ?', id);
      setHistoryData(prevData => prevData.filter(item => item.id !== id)); // Update state after deletion
      console.log('History entry deleted');
    } catch (error) {
      console.error('Error deleting history entry:', error);
    }
  };

  const viewProcedure = (procedure: string) => {
    setSelectedProcedure(procedure); // Set the procedure for the selected item
    setModalVisible(true); // Open the modal
  };

  return (
    <SafeAreaView className="flex-1 bg-green-50">
      {/* Title Section */}
      <View className="bg-green-600 p-4 rounded-b-3xl shadow-lg">
        <Text className="text-2xl font-JakartaBold text-white text-center">History</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="p-4">
        {historyData.map((item) => (
          <View key={item.id} className="bg-white p-6 mb-6 rounded-lg shadow-lg">
            <Text className="font-bold text-lg mb-2 text-green-700">{item.title}</Text>
            <Text className="text-gray-700 mb-4">{item.description}</Text>

            <View className="flex-row justify-between">
              <View className="flex-col">
                <Text className="text-gray-500 text-sm">Date</Text>
                <Text className="text-gray-800 font-semibold">{item.date}</Text>
              </View>
            </View>

            {/* Buttons to View and Delete History */}
            <View className="flex-row justify-between mt-4">
              <Button
                title="View"
                onPress={() => viewProcedure(item.procedure)} // Set procedure and open modal
              />
              <Button
                title="Delete"
                onPress={() => deleteHistory(item.id)}
                color="red"
              />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal for Viewing Procedure */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal on back press
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg shadow-lg w-4/5">
            <Text className="font-bold text-lg mb-4 text-center">Procedure</Text>
            <Text className="text-gray-700 mb-6">{selectedProcedure}</Text>
            <Pressable
              onPress={() => setModalVisible(false)} // Close modal
              className="bg-green-600 p-3 rounded-lg"
            >
              <Text className="text-center text-white">Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Footer/>
    </SafeAreaView>
  );
};

// Main App Component wrapped with SQLiteProvider
export default function App() {
  return (
    <SQLiteProvider databaseName="organicDb.db" onInit={initializeDatabase}>
      <History />
    </SQLiteProvider>
  );
}