import { useEffect, useState, useRef } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Dimensions, SafeAreaView, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Album() {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modoPrincipal, setModoPrincipal] = useState('carrossel');
  
  const carouselRef = useRef(null);

  useEffect(() => {
    async function carregarImagens() {
      try {
        // TROCAR O NOME DA PASTA DO SERVIDOR PROVA SEU NOME , QUE ESTÁ NO SERVIDOR
        const response = await fetch('http://localhost/PROVA_ANAC/listar_imagens.php');
        const data = await response.json();
        setImagens(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    }
    carregarImagens();
  }, []);

  const focarImagem = (index) => {
    setModoPrincipal('carrossel');
    
    setTimeout(() => {
      carouselRef.current?.scrollTo({ index, animated: true });
    }, 100);
  };

  if (loading) {
    return (
      <View style={styles.loadinganac}>
        <ActivityIndicator size="large" color="#0284c7" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaanac}>

      {/* COLOCAR AQUI O TITULO COMO O NOME DO LUGAR TURISTICO ESCOLHIDO */}      
      <Text style={styles.headeranac}>Conheça o Rio de Janeiro</Text>

      <View style={styles.navBaranac}>
        <TouchableOpacity 
          style={[styles.navButtonanac, modoPrincipal === 'carrossel' && styles.navActiveanac]}
          onPress={() => setModoPrincipal('carrossel')}
        >
          <Ionicons name="images" size={18} color="#fff" />
          <Text style={styles.navTextanac}>Visualizador</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButtonanac, modoPrincipal === 'grade' && styles.navActiveanac]}
          onPress={() => setModoPrincipal('grade')}
        >
          <Ionicons name="grid" size={18} color="#fff" />
          <Text style={styles.navTextanac}>Ver Grade</Text>
        </TouchableOpacity>
      </View>

      <ScrollView stickyHeaderIndices={[0]}>

        <View style={styles.mainContaineranac}>
          {modoPrincipal === 'carrossel' ? (
            <Carousel
              ref={carouselRef}
              loop={false}
              width={width}
              height={300}
              data={imagens}
              renderItem={({ item }) => (
                <View style={styles.carouselSlideanac}>
                  <Image source={{ uri: item.url || item }} style={styles.imgFullanac} />
                  <Text style={styles.labelFullanac}>{item.split('/').pop()}</Text>
                </View>
              )}
            />
          ) : (
            <FlatList
              data={imagens}
              numColumns={3}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity 
                  style={styles.touchableGradeanac} 
                  onPress={() => focarImagem(index)} 
                >
                  <Image source={{ uri: item.url || item }} style={styles.imgGridanac} />
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        <View style={styles.footerListanac}>
          <Text style={styles.footerTitleanac}>LISTA DE ARQUIVOS</Text>
          {imagens.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.miniButtonanac} 
              onPress={() => focarImagem(index)}
            >
              <Image source={{ uri: item.url || item }} style={styles.miniImganac} />
              <View style={styles.miniInfoanac}>
                <Text style={styles.miniNameanac} numberOfLines={1}>{item.split('/').pop()}</Text>
              </View>
              <Ionicons name="arrow-forward-circle" size={24} color="#0284c7" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaanac: {
    flex: 1,
    backgroundColor: '#0f172a' 
  },
  headeranac: { 
    fontSize: 22,
    color: '#fff', 
    textAlign: 'center', 
    fontWeight: 'bold', 
    marginVertical: 15 
  },  
  navBaranac: { 
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: 12, 
    marginBottom: 15
  },
  navButtonanac: { 
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#1e293b', 
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8 
  },
  navActiveanac: { 
    backgroundColor: '#0284c7' // Destaque em azul combinando com o app
  },
  navTextanac: {
     color: '#fff', 
     fontSize: 13,
     fontWeight: 'bold' 
  },
  mainContaineranac: { 
    minHeight: 320, 
    backgroundColor: '#0f172a'
  },
  carouselSlideanac: { 
    alignItems: 'center'
  },
  imgFullanac: { 
    width: width * 0.9, 
    height: 260, 
    borderRadius: 16, 
    backgroundColor: '#1e293b'
  },
  labelFullanac: { 
    color: '#94a3b8', 
    marginTop: 10, 
    fontSize: 13 
  },  
  touchableGradeanac: { 
    flex: 1,
    aspectRatio: 1,
    margin: 4
  },
  imgGridanac: { 
    width: '100%', 
    height: '100%', 
    borderRadius: 8 
  },
  footerListanac: { 
    padding: 20, 
    borderTopWidth: 1, 
    borderTopColor: '#1e293b',
    backgroundColor: '#0f172a'
  },
  footerTitleanac: { 
    color: '#0284c7', 
    fontSize: 12, 
    letterSpacing: 1, 
    fontWeight: '900', 
    marginBottom: 15
  },
  miniButtonanac: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#1e293b',
    padding: 10, 
    borderRadius: 12, 
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155'
  },
  miniImganac: { 
    width: 45, 
    height: 45, 
    borderRadius: 8 
  },
  miniInfoanac: { 
    flex: 1, 
    marginLeft: 15 
  },
  miniNameanac: { 
    color: '#FFF', 
    fontSize: 14, 
    fontWeight: '600'
  },
  loadinganac: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#0f172a'
  }
});