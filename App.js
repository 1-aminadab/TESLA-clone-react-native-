import { StyleSheet, View} from 'react-native';
import CarItem from './components/car-items';

export default function App() {
  return (
    <View style={styles.container}>      
     <CarItem 
      name="model 20" 
      tagline="order online for " 
      taglineCTA="Touchless Delivery"
      image={require("./assets/images/ModelS.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
});
