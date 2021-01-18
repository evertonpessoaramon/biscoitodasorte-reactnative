import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const frases = [
    "Siga os bons e aprenda com eles.",
    "O bom-sendo vale mais do que muito conhecimento",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz",
    "Realize o óbvio, pense no improvável e conquiste o impossível",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso."
  ]
  const [textoFrase, setTextoFrase] = useState('');
  const [imgBiscoito, setImgBiscoito] = useState(require('./src/images/biscoito.png'));

  const QuebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase('"' + frases[numeroAleatorio] + '"');
    setImgBiscoito(require('./src/images/biscoitoAberto.png'));
  }

  const NovoBiscoito = () => {
    setTextoFrase('');
    setImgBiscoito(require('./src/images/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={imgBiscoito}
      />
      <Text style={styles.textoFrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={QuebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
      {textoFrase !== "" &&
        <TouchableOpacity style={[styles.botao, styles.botao2]} onPress={NovoBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Novo Biscoito</Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  },
  botao2:{
    marginTop: 10
  }
});