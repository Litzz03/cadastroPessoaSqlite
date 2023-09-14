import {Button, Text, TextInput, View} from 'react-native'

export function AddContacts(){

    return(
        <View>
            <Text>Nome</Text>
            <TextInput placeholder='informe seu nome' keyboardType='name-phone-pad'/>

            <Text>Telefone</Text>
            <TextInput placeholder='informe o telefone' keyboardType='phone-pad'/>

            <Button title='Salvar Contato'/>
        </View>
    )
}