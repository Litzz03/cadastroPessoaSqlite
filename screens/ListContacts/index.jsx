import { useEffect, useState } from "react";
import { Alert, Button, FlatList, Text, View } from "react-native";
import { deleteContact, getContacts } from "../../db/Database";
import { styles } from "./styles";


export function ListContacts(){

    const [contacts, setContacts] = useState([])

    const refreshList = async () => {
        
        try{
            //Cria um ponto de parada enquanto não tiver uma resposta
            const listContacts = await getContacts()

            console.log(listContacts)

            setContacts(listContacts)
        }catch(error){
            Alert.alert("Erro na listagem")
        }
      
    }

    const handleDeleteContact = async (id) => {
        try{
            await deleteContact(id)
            refreshList();
            Alert.alert('Sucesso', 'Contato excluido com sucesso')
        }catch(error){
            Alert.alert("Erro ao excluir"+ error.message)
        }
    }

    useEffect(()=> {
        refreshList()
    }, [])

    return(
        <View>
            <Text>Lsita de Contatos</Text>
            <FlatList 
                data={contacts}
                keyExtractor={(contact) => contact._id}
                renderItem={ ({item}) => (
                    <View style={styles.containerItem}>
                        <Text style={styles.contactName}> Nome : {item.name}</Text>
                        <Text style={styles.contactPhone}> Telefone : {item.phone}</Text>
                        <Button  title="Excluir" color='#df5151' onPress={() => handleDeleteContact(item._id)}/>
                    </View>
                )}
            />
        </View>
    )

}