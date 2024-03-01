import React, { useState } from 'react' ;
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { CepController } from '../Controller/CepController';
import CepModel from '../Model/CepModel';

export function Home() {
  const [cep, setCep] = useState<string>("");
  const [ceps, setCeps] = useState<CepModel[]>([]);

const hendleSearch = () => {
  console.log(cep);
  try{
    CepController.fetchCep(cep).then(() => {
      setCeps([...CepController.getCeps()]);
      //setCeps(CepController.getCeps());
    })
  } catch (error) {
    console.log("Error fetching: ", error);
  }
}

  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center", paddingTop: 50}}>
      <TextInput 
        style={{width:"95%", height:40, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 5}}
        placeholder="Digite o cep..."
        onChangeText={text => setCep(text)}
        value={cep}
      />
      <Button title="Buscar" onPress={hendleSearch} />

      <FlatList 
        data={ceps}
        keyExtractor={item => item.cep}
        renderItem={({item}) => (
          <View style={{marginTop: 20}}>
            <Text> Cep: {item.cep}</Text>
            <Text> Log: {item.logradouro}</Text>
            <Text> Bairro: {item.bairro}</Text>
            <Text> Cidade: {item.cidade}/{item.uf}</Text>
          </View>
        )}
      />

    </View>
  );
}