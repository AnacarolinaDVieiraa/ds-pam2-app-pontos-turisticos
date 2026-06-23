import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function PontosTuristicos(){
    return(
        <ScrollView contentContainerStyle={styles.scrollContaineranac} style={styles.containeranac}>
            
            <Text style={styles.tituloTelaanac}>Pontos Turísticos</Text>

            {/* PONTO 1 */}
            <View style={styles.cardanac}>
                <Text style={styles.cidadeanac}>Rio de Janeiro</Text>
                <Text style={styles.localanac}>Cristo Redentor</Text>
                <Text style={styles.descricaoanac}>O Cristo Redentor é uma estátua colossal de Jesus Cristo localizada no topo do Morro do Corcovado, no Rio de Janeiro. Considerada uma das Sete Maravilhas do Mundo Moderno, ela é o maior símbolo do turismo e da fé no Brasil.</Text>
            </View>

            {/* PONTO 2 */}
            <View style={styles.cardanac}>
                <Text style={styles.cidadeanac}>Rio de Janeiro</Text>
                <Text style={styles.localanac}>Bondinho Pão de Açúcar</Text>
                <Text style={styles.descricaoanac}>O Parque Bondinho Pão de Açúcar é um famoso teleférico que liga a Praia Vermelha ao Morro da Urca e ao Morro do Pão de Açúcar, no Rio de Janeiro. Inaugurado em 1912, foi o primeiro teleférico do Brasil e oferece vistas panorâmicas da Baía de Guanabara e da cidade.</Text>
            </View>
             
            {/* PONTO 3 */}
            <View style={styles.cardanac}>
                <Text style={styles.cidadeanac}>Rio de Janeiro</Text>
                <Text style={styles.localanac}>Praia de Copacabana</Text>
                <Text style={styles.descricaoanac}>A Praia de Copacabana, apelidada carinhosamente de "Princesinha do Mar", é um dos cartões-postais mais famosos do mundo. Localizada na Zona Sul do Rio de Janeiro, ela se estende por cerca de 4 km e oferece uma infraestrutura completa, misturando a paisagem urbana com a beleza natural da cidade.</Text>
            </View>
            
            {/* PONTO 4 */}
            <View style={styles.cardanac}>
                <Text style={styles.cidadeanac}>Rio de Janeiro</Text>
                <Text style={styles.localanac}>Museu do Amanhã</Text>
                <Text style={styles.descricaoanac}>O Museu do Amanhã é um museum de ciências e artes localizado na Praça Mauá, na Zona Portuária do Rio de Janeiro. Inaugurado em 2015 como parte do projeto de revitalização urbana Porto Maravilha, ele opera sob o conceito de "museu de terceira geração", convidando o visitante a examinar o presente e a imaginar futuros possíveis.</Text>
            </View>
          
            {/* PONTO 5 */}
            <View style={styles.cardanac}>
                <Text style={styles.cidadeanac}>Rio de Janeiro</Text>
                <Text style={styles.localanac}>Escadaria Selarón</Text>
                <Text style={styles.descricaoanac}>A Escadaria Selarón é um icônico mosaico a céu aberto localizado no Rio de Janeiro, ligando o bairro da Lapa a Santa Teresa. Criada pelo artista plástico chileno Jorge Selarón, é considerada o terceiro ponto turístico mais visitado da cidade.</Text>
            </View>
            
            {/* PONTO 6 */}
            <View style={styles.cardanac}>
                <Text style={styles.cidadeanac}>Rio de Janeiro</Text>
                <Text style={styles.localanac}>Maracanã</Text>
                <Text style={styles.descricaoanac}>O Estádio Jornalista Mário Filho, mundialmente conhecido como Maracanã ou "Maraca", é um dos maiores estádios do Brasil e um dos templos mais famosos do futebol global. Localizado na Zona Norte do Rio de Janeiro, tornou-se o maior do mundo em sua inauguração para a Copa do Mundo de 1950.</Text>
            </View>

        </ScrollView>
    )
}

// ATENÇÃO ALTERE OS ESTILOS - TODOS OS ESTILOS DEVEM TER O SEU NOME EXEMPLO: BOTAOLUIZ

const styles = StyleSheet.create({
    containeranac: {
      flex: 1,
      backgroundColor: '#f4f6f9',
    },
    scrollContaineranac: {
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 40,
      alignItems: 'center',
    },
    tituloTelaanac: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 20,
        textAlign: 'center',
    },
    cardanac: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        width: '100%',
        maxWidth: 350,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
        borderTopWidth: 4,
        borderTopColor: '#0284c7',
    },
    cidadeanac: {
        fontSize: 11,
        color: '#64748b',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    localanac: {
        fontSize: 18,
        color: '#0284c7',
        fontWeight: 'bold',
        marginTop: 2,
        marginBottom: 8,
    },
    descricaoanac: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
    }
});