import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Text style={styles.texto}>Dashboard</Text>
      <View style={styles.letras}>
      <Text style={styles.texto1}>Hola,</Text>
      <Text style={styles.texto1}>Ramzeb Molder</Text>
      </View>
      <View style={styles.caja2}>
      <Text style={styles.texto0}>Tareas pasadas</Text>
      <TouchableOpacity style={styles.button0}>
                <Text style={styles.texto}>Productividad</Text>
              </TouchableOpacity>
      </View>

        <View style={styles.caja1}>
        <Text style={styles.letras}>Tareas diarias</Text>
            <View style={styles.fila}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.texto}>2/5</Text>
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
              <Text style={styles.texto}>Tareas</Text>
              <TouchableOpacity style={styles.button10}>
              <TouchableOpacity style={styles.button11}>
              <TouchableOpacity style={styles.button12}>
          <Text style={styles.title}>+</Text>
        </TouchableOpacity>
        </TouchableOpacity>
        
          
        </TouchableOpacity>
        </View>
            </View>
            <View style={styles.otro}>
            <Text style={styles.texto}>Marcaste 2/5 tareas como </Text>
            <Text style={styles.texto}>completadas</Text>
            </View>
            <View style={styles.fila}>
              <View style={styles.caja7}>
              <TouchableOpacity style={styles.button2}>
              <Text style={styles.texto}>Todas</Text>
            </TouchableOpacity>
              </View>
            
            </View>
        </View>
        <View style={styles.separador2}></View> 
        <View style={styles.caja1}>
        <Text style={styles.texto}>Tareas Completadas en los ultimos 5 dias</Text>
            <View style={styles.fila}>
              <View style={styles.columna}>
              <View style={styles.cuadro1}>
              <View style={styles.cuadro3}></View>
              </View>
              <Text style={styles.texto}>L </Text>
              </View>
              <View style={styles.columna}>
              <View style={styles.cuadro1}>
              <View style={styles.cuadro4}></View>
              </View>
              <Text style={styles.texto}>M </Text>
              </View>
              <View style={styles.columna}>
              <View style={styles.cuadro1}>
              <View style={styles.cuadro5}></View>
              </View>
              <Text style={styles.texto}>M </Text>
              </View>
              <View style={styles.columna}>
              <View style={styles.cuadro1}>
              <View style={styles.cuadro5}></View>
              </View>
              <Text style={styles.texto}>J </Text>
              </View>
              <View style={styles.columna}>
              <View style={styles.cuadro1}>
              <View style={styles.cuadro7}></View>
              </View>
              <Text style={styles.texto}>V </Text>
              </View>
              <View style={styles.columna}>
              <View style={styles.cuadro1}>
              <View style={styles.cuadro2}></View>
              </View>
              <Text style={styles.texto}>6</Text>
              </View>
            
            </View>
            <View style={styles.fila}>
              <Text style={styles.texto8}>50 Tareas </Text>
              <Text style={styles.texto9}> 2 proyectos</Text>
            </View>
        </View>
  

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1:{
    backgroundColor: '#3C3E4A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  caja1: {
    backgroundColor: '#323E87',
    width: 275,
    height: 270,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    borderRadius:25,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
  },
  columna:{
    flexDirection: 'column',
  },
  caja2:{
    flexDirection: 'row',
    
  },
  button0:{
    backgroundColor:'blue',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    width: '90',
    color: 'white',
    margin: 10,
    padding: 10,
    
  },
  button:{
    backgroundColor:'blue',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    width: '90',
    color: 'white',
    margin: 10,
    padding: 10,
  },
  button2:{
    backgroundColor:'green',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    width: '90',
    color: 'white',
    margin: 10,
    padding: 10,
  },
  texto:{
    color: 'white',
    textAlign: 'center',
  },
  separador: {
    width: 10,
  },
  separador2: {
    height: 12,
  },
  texto1:{
    color:'white',
  },
  texto0:{
    color:'white',
    margin:10,
    textAlign: 'left',
    
  },
  letras:{
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    color:'white',
    margin:15
  },
  otro:{
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    color:'white',
    margin:15
  },
  texto8:{
    color:'skyblue',
    margin:10
  },
  texto9:{
    color:'green'
  },
  cuadro1:{
    backgroundColor: 'white',
    width: 15,
    height: 100,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems:'flex-endr',
    alignContent:'flex-end',
    justifyContent:'flex-end',
    margin:15
  },
  cuadro2:{
    backgroundColor: 'blue',
    width: 15,
    height: 80,
  },
  cuadro3:{
    backgroundColor: 'blue',
    width: 15,
    height: 50,
  },
  cuadro4:{
    backgroundColor: 'blue',
    width: 15,
    height: 70,
  },
  cuadro5:{
    backgroundColor: 'blue',
    width: 15,
    height: 30,
  },
  cuadro6:{
    backgroundColor: 'blue',
    width: 15,
    height: 50,
  },
  cuadro7:{
    backgroundColor: 'blue',
    width: 15,
    height: 20,
  },
  button10: {
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 30,
    margin:7
    },
    button11: {
      borderRadius: 100,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#323E87',
      margin:7
      },
      button12: {
        borderRadius: 100,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin:7
        },
    buttonContainer: {
      flexDirection:'row',
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      alignItems:'flex-endr',
      alignContent:'flex-end',
      justifyContent:'flex-end',
      
    },

});