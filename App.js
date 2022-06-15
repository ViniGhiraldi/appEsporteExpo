import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Titulo from './componentes/Titulo';
import Barsports from './componentes/Barsports';
import Cardgame from './componentes/Cardgame';
import Barvideos from './componentes/Barvideos';
import Barselect from './componentes/Barselect';
import BrasilJapao from './assets/jogoFut.jpg';
import CelticsWarriors from './assets/cxw.jpg';

import estilos from './globalStyle/estilos';
import Footer from './componentes/Footer';


export default function App() {
  return (
    <View style={estilos.body}>
      <Titulo/>
      <Barsports/>
      <View style={ estilos.container }>
        <Cardgame img={BrasilJapao}/>
        <Cardgame img={CelticsWarriors}/>
        <Barvideos/>
        <Barvideos/>
      </View>
      <Footer/>
      <Barselect/>
      
    </View>
  );
}