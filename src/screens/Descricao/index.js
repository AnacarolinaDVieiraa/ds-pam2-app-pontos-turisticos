import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function Descricao(){

    return(
        <View style={styles.containeranac}>
            <Text style={styles.tituloanac}>Descrição do Local Turístico</Text>
            
            <View style={styles.cardanac}>
                <Text style={styles.subtituloanac}>Rio de Janeiro</Text>
                <Text style={styles.textoanac}>
                    População do Estado: 17.223.547 habitantes.
                </Text>
                <Text style={styles.textoanac}>
                    O estado do Rio de Janeiro possui uma área total de 43.750,424 km².
                </Text>
            </View>
        </View>
    );

}

// ATENÇÃO ALTERE OS ESTILOS - TODOS OS ESTILOS DEVEM TER O SEU NOME EXEMPLO: BOTAOLUIZ

const styles = StyleSheet.create({
    containeranac: {
      flex: 1,
      backgroundColor: '#f4f6f9',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    tituloanac: {
        fontSize: 24,
        color: '#0f172a',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    cardanac: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
        borderLeftWidth: 5,
        borderLeftColor: '#0284c7', 
    },
    subtituloanac: {
        fontSize: 20,
        color: '#0284c7',
        fontWeight: 'bold',
        marginBottom: 12,
    },
    textoanac: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 22,
        marginBottom: 8,
    },
    caixaanac: {
        textAlign: 'center',
        width: 100,
        borderWidth: 5,
        borderColor: 'black'
    }
});