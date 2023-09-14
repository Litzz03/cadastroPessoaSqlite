import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('contacts.db')

export const initDatabase = () => {
    db.transaction(conn => {
        conn.executeSql("CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT); ",
        [],
        () => console.log("Tabela criada com sucesso !"),
        (error) => console.log("Problema ao criar tabela" + JSON.stringify(error))
        )
    })
}