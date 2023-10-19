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

export const addContact = (name, phone) => {

    db.transaction( (conn) => {
        conn.executeSql(
            "INSERT INTO contacts (nome, telefone) VALUES (?, ?);",
            [name, phone],
            ( cb, result) => {console.log(result.insertId)},
            ( cb, error ) => {console.log('ERROR' + error)}
        )
    })
}

export const getContacts = () => {

    return new Promisse((resolve, reject) => {
        db.transaction( (conn) => {
            conn.executeSql(
                "SELECT * FROM contacts; ",
                [],
                (cd, results) => {resolve(results.rows._array)},
                (cd, error) => {reject(error)} 
            )
        })
    })
}

export const deleteContact = (id) => {
    return new Promise((resolver, reject) => {
        db.transaction((conn) => {
            conn.executeSql(
                'DELETE FROM contacts WHERE _id = ?; ',
                [id],
                () => resolve(),
                (cb, error) => {reject(error)}
            )
        })
    }) 
}