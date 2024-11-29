import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

export function useHistoryData() {
  const db = useSQLiteContext(); // Get the SQLite database instance
  const [historyData, setHistoryData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data when the hook is used
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
      setHistoryData((prevData) => prevData.filter((item) => item.id !== id));
      console.log('History entry deleted');
    } catch (error) {
      console.error('Error deleting history entry:', error);
    }
  };

  return { historyData, deleteHistory };
}
