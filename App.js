import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';


export default function App(){
  const [contador, setContador] = useState(0)

  return(
    <View style={{ marginTop: 20 }}>

      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'orange'}}>Contador de Pessoas</Text>

        <Text style={{marginTop: 30, fontSize: 48, color: 'red'}}>{contador}</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Button title="+" onPress={() => setContador(contador+1)}/>
      </View>

      <View style={{marginTop: 20}}>
        <Button title="-" onPress={() => {
          if (contador > 0) setContador(contador-1)
        }} />
      </View>

    </View>
  )
}