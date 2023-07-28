import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; 
import { colors, ThemeColors } from '../../constants/colors'; 
import foto1 from '../../assets/img/foto1.jpg';
import foto2 from '../../assets/img/foto2.jpg';
import Card from '../../components/Card';
import Bar from '../../components/Bar';
import Carousel from 'react-native-reanimated-carousel';

const Home = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;
  const currentTheme: ThemeColors[keyof ThemeColors] = colors[theme];

  const images = [foto1, foto2];
  const width = Dimensions.get('window').width;
  return (
      <View style={[styles.container, { backgroundColor: currentTheme.backgroundBody}]}>
        <Text style={[styles.title, { color: currentTheme.text }]}>Buenos días ☀️</Text>
        <Text style={[styles.paragraph, { color: currentTheme.cardText }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus mi vel massa aliquam, ac fringilla odio vestibulum.
          Etiam ac eros arcu. Fusce efficitur, neque eget congue egestas, erat quam iaculis arcu, in sagittis felis justo nec elit.
        </Text>

        <View style={styles.cardContainer}>
          <View style={styles.block}>
            <Card icon="logout" title='67 accesos' subtitle="en los ultimos 7 dias" titleColor='#079860'>
            <Text style={[{color: currentTheme.text, fontWeight: 'bold'}]}>Resumen de Accesos</Text> 
            <View style={styles.viewContent}>
              <Text style={[ styles.text, {color: currentTheme.text}]}>Completados</Text> 
              <Text style={[styles.text, { color: currentTheme.textCondety }]}>67</Text>
            </View>
            <View style={styles.viewContent}>
              <Text style={[ styles.text, {color: currentTheme.text}]}>Cancelados</Text> 
              <Text style={[styles.text, { color: currentTheme.textCondety }]}>5</Text>
            </View>
            <View style={styles.viewContent}>
              <Text style={[ styles.text, {color: currentTheme.text}]}>Pendientes</Text> 
              <Text style={[styles.text, { color: currentTheme.textCondety }]}>4</Text>
            </View>
            <View style={styles.viewContent}>
              <Text style={[ styles.text, {color: currentTheme.text}]}>Pedidos</Text> 
              <Text style={[styles.text, { color: currentTheme.textCondety }]}>2</Text>
            </View>
            </Card>
            <Card icon="currency-usd" title='Finanzas' subtitle="Finanzas" titleColor='#E3E3E3'>
            </Card>
          </View>

          <View style={styles.middleSpace} />

          <View style={styles.block}>
            <Card icon="book-open-page-variant-outline" title='2 invitaciones' titleColor='#A00000' subtitle="en los ultimos 7 dias">
              <Bar quantity={11} color="#A00000" title='Individual' maxQuantity={100} />
              <Bar quantity={30} color="#A00000" title='Grupal' maxQuantity={100} />
            </Card>
            <Card icon="calendar-clock" title='10 reservaciones' titleColor='#004DA0' subtitle="en los ultimos 7 dias">
              <Bar quantity={11} color="#004DA0" title='Club House' maxQuantity={100} />
              <Bar quantity={30} color="#004DA0" title='Piscina' maxQuantity={100} />
            </Card>
            <Card icon="badge-account" title='Crear Reunion' titleColor='#A0A000' subtitle="Lorem ipsum dolor">
              <Bar quantity={0} color="#A0A000" title='Club House' maxQuantity={100} />
              <Bar quantity={0} color="#A0A000" title='Piscina' maxQuantity={100} />
            </Card>
          </View>
        </View>
      </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  viewContent: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  block: {
    flex: 1,
  },
  middleSpace: {
    width: '2%',
  },
  paragraph: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: '300',
  }
});

export default Home;
