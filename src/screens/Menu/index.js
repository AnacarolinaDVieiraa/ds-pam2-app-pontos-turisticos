import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {  useNavigation } from '@react-navigation/core';

export default function Menu({ navigation }){
    return(
        <View style={styles.containeranac}>

            {/* TROCAR O TÍTULO PROVA 2 BIMESTRE PAM II */}
            <Text style={styles.tituloanac}>CONHEÇA O RIO DE JANEIRO</Text>
            <Text style={styles.texto2anac}>CLIQUE NA OPÇÃO QUE DESEJA</Text>
     

            {/* CRIAR UM BOTÃO PARA CHAMAR CADA TELA */}

            <Text style={styles.textoanac}>CONHEÇA O LOCAL TURISTICO</Text>
            <TouchableOpacity style={styles.botaoanac}
            //   COLOCAR O NOME DA TELA A SER CHAMADA PELO BOTÃO
             onPress={() => navigation.navigate("Descricao")}
            >
                <Text style={styles.textobotaoanac}>LOCAL TURISTICO</Text>
            </TouchableOpacity>

{/* /// */}
     
            <Text style={styles.textoanac}>CONHEÇA OS PONTOS TURISTICOS</Text>
            <TouchableOpacity style={styles.botaoanac}
             onPress={() => navigation.navigate("PontosTuristicos")}
            >
                <Text style={styles.textobotaoanac}>PONTOS TURISTICOS</Text>
            </TouchableOpacity>
{/* /// */}

            <Text style={styles.textoanac}>ALBUM DE FOTOS</Text>
            <TouchableOpacity style={styles.botaoanac}
             onPress={() => navigation.navigate("Album")}
            >
                <Text style={styles.textobotaoanac}>ALBUM DE FOTOS</Text>
            </TouchableOpacity>
           
{/* /// */}
            <Text style={styles.textoanac}>GERAR MAPA</Text>
            <TouchableOpacity style={styles.botaoanac}
             onPress={() => navigation.navigate("Mapa")}
            >
                <Text style={styles.textobotaoanac}>GERAR MAPAS</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    containeranac: {
      flex: 1,
      backgroundColor: '#f4f6f9',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    tituloanac: {
        fontSize: 26,
        color: '#0f172a',
        fontWeight: 'bold',
        marginBottom: 30,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    textoanac:{
        fontSize: 12,
        color: '#64748b',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    texto2anac:{
        fontSize: 12,
        color: '#0284c7',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    botaoanac:{
        borderRadius: 8,
        backgroundColor: '#0284c7',
        width: '85%',
        paddingVertical: 14,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textobotaoanac:{
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        letterSpacing: 1,
    }
});