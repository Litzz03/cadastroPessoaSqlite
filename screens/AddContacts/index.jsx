import { useState } from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native'
import { addContact } from '../../db/Database';

export function AddContacts(props){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')

    const handleAddContact = () => {
        if(name.trim() === '' || phone.trim() === ''){
            Alert.alert('Preencha os valores corretamente.')
            return;
        }

        addContact(name, phone)
        props.onRefreshList()
        setName('')
        setPhone('')
    }
    return(
        <View>
            <Text>Nome</Text>
            <TextInput placeholder='informe seu nome ' 
            keyboardType='name-phone-pad'
            onChangeText={setName} value={name}/>

            <Text>Telefone</Text>
            <TextInput placeholder='informe o telefone' 
            keyboardType='phone-pad'
            onChangeText={setPhone} value={phone}/>

            <Button title='Salvar Contato' onPress={handleAddContact}/>
        </View>
    )
}