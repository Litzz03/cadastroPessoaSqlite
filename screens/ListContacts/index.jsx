import { Alert, FlatList, Text, View } from "react-native";
import { getContacts } from "../../db/Database";
import { useState } from "react";

export function ListContacts(){

    const [contacts, setContacts] = useState([])

    const refreshList = async () => {
        try{
            //Cria um ponto de parada enquanto não tiver uma resposta
            const listContacts = await getContacts()
            setContacts(listContacts)
        }catch(error){
            Alert.alert("Erro na listagem")
        }
        
    }

    return(
        <View>
            <Text>Lista de Contatos</Text>
            <FlatList/>
        </View>
    )
}