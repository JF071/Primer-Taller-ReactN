import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Button,
  Alert
} from 'react-native';

const RegisterForm = ({ modalVisible, setModalVisible, SetEmployees, employees }) => {
  const [employee, SetEmployee] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = () => {
    if ([employee, email, phone, password].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return
    }

    if (!isPasswordValid(password)) {
      Alert.alert('Error','La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial')
      return
    }

    const nuevoemployee = {
      id: Date.now(),
      employee,
      email,
      phone,
      password
    };

    SetEmployees([...employees, nuevoemployee]);
    setModalVisible(false);
    SetEmployee('');
    setEmail('');
    setPhone('');
    setPassword('');
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
    return(
        <Modal animationType='slide' visible={modalVisible} style={styles.modalContainer}>
        <SafeAreaView style={styles.modalContent}>
          <ScrollView>
            <View><Text style={styles.label}>Nombre del Empleado</Text></View>
            <TextInput style={styles.input}
            value = {employee}
            onChangeText={SetEmployee}
            ></TextInput>

            <View><Text style={styles.label}>Email</Text></View>
            <TextInput style={styles.input}
            value = {email}
            onChangeText={setEmail}
            keyboardType='email-address'
            ></TextInput>

            <View><Text style={styles.label}>Celular</Text></View>
            <TextInput style={styles.input}
            value = {phone}
            onChangeText={setPhone}
            keyboardType='number-pad'
            ></TextInput>

            <View><Text style={styles.label}>Contraseña</Text></View>
            <TextInput style={styles.input}
            value = {password}
            onChangeText={setPassword}
            multiline={true}
            ></TextInput>

            <Button title='Registrar' onPress={handleRegistro} style={{marginBottom:100}}></Button>
            <Button title='Cerrar' onPress={()=>setModalVisible(false)}></Button>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#666666',
    },
    modalContent: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      overflow: 'hidden',
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 30
    },
  });

export default RegisterForm;