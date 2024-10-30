import {
    enablePromise,
    openDatabase,
  } from "react-native-sqlite-storage"
  
  // Enable promise for SQLite
  enablePromise(true)
  
  export const Connection = async () => {
    return openDatabase(
      { name: "organicDb.db", location: "default" },
      () => {},
      (error) => {
        console.error(error)
        throw Error("Could not connect to database")
      }
    )
  }

export default Connection;