import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Button,
  TextInput
} from 'react-native';

import RegisterForm from './src/component/FormularioRegistro.js';
import IngresoHoras from './src/component/RegistroHoras.js';

const App = () =>{
//Aqui van lo shooks
  const [modalVisible,setModalVisible] = useState(false);
  const [employees, SetEmployees] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cerrarModal= () =>{
    setModalVisible(false)
  }

  const handleLogin = () => {
    if (email === 'usuario@usuario.com' && password === 'contraseña') {
      setIsLoggedIn(true);
      cerrarModal();
      setEmail('');
      setPassword('');
    } else {
      Alert.alert('Error', 'Inicio de sesión fallido. Verifica tus credenciales.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
 
  return(
    <SafeAreaView style={styles.contains}>
    <ScrollView>
      <View>
        <Text style= {styles.title}>
          Administración de empleados {' '}
        </Text>
        <Text style={styles.subtitle}>Iniciar sesión </Text>
      </View>
      {isLoggedIn ? (
        <View>
          <Text>Bienvenido, {email}!</Text>
          <Button
            title="Registrar Horas"
            onPress={() => setModalVisible(true)}
          />

          {modalVisible &&(
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => cerrarModal()}
          >
            <IngresoHoras />
            <Button title="Cerrar" onPress={() => cerrarModal()} />
          </Modal>
          )}
          <Button title="Cerrar sesión" onPress={handleLogout} />
        </View>
      ) : (
        <View>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            placeholder="Ingresa tu contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Iniciar sesión" onPress={handleLogin}></Button>
          <Pressable
          style= {styles.btnRegister}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.btnTextRegister}>Registrarse</Text>
        </Pressable>
          <RegisterForm
            modalVisible = {modalVisible}
            SetEmployees={SetEmployees} employees={employees}
            setModalVisible={setModalVisible}
            />
        </View>
        )}

      </ScrollView>      
    </SafeAreaView>

  )};

const styles = StyleSheet.create({
  contains:{
    backgroundColor:'#FFFFFF',
    flex:1
  },
  title:{
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 12,
      color: '#222222'
  },
  subtitle:{
      fontSize: 22,
      marginVertical: 12,
      fontWeight: 'bold',
      color: '#222222',
      marginBottom : 10
  },
  btnRegister: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextRegister: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 30
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
