import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

const IngresoHoras = () => {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [amPm, setAmPm] = useState('AM');
  const [timeExit, setTimeExit] = useState('');
  const [totalHours, setTotalHours] = useState('');

  const calculateTotalHours = () => {
    if (startTime && timeExit) {
      // Calcular las horas trabajadas
      const startTimeMoment = parseInt(startTime);
      const timeExitMoment = parseInt(timeExit);
      const totalHoursTrabajadas =
        timeExitMoment - startTimeMoment + (amPm === 'PM' ? 12 : 0);

      setTotalHours(totalHoursTrabajadas.toString() + ' horas');
    } else {
      Alert.alert('Error', 'Completa los campos de hora inicio y hora salida.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registro de Horas</Text>
      <View>
        <Text style={styles.label}>Fecha</Text>
        <TextInput
          placeholder="Selecciona la fecha"
          value={date}
          onChangeText={setDate}
          style={styles.input}
        />
        <Text style={styles.label}>Hora de inicio</Text>
        <TextInput
          placeholder="HH"
          value={startTime}
          onChangeText={setStartTime}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.label}>AM/PM</Text>
        <TextInput
          placeholder="AM"
          value={amPm}
          onChangeText={setAmPm}
          style={styles.input}
        />
        <Text style={styles.label}>Hora de salida</Text>
        <TextInput
          placeholder="HH"
          value={timeExit}
          onChangeText={setTimeExit}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Calcular Total de horas" onPress={calculateTotalHours} />
        {totalHours && (
          <Text style={styles.totalHours}>Total de horas: {totalHours}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  totalHours: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default IngresoHoras;