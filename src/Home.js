import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import Loader from './Loader';
import { testLogin } from '../api/api';

const baseUrl = Platform.OS === 'ios' ? '10.0.0.34' : '192.168.0.21';

const Home = () => {
  const [ip, setIp] = useState(baseUrl);
  const [res, setRes] = useState('');
  const [username, setUsername] = useState('4444');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const [port, setPort] = useState('8083');
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    const url = `http://${ip}:${port}/scripts/trs.exe?fct=10010&entry=${username}&password=${password}&dn=Freshop`;

    setIsLoading(true);
    testLogin(url)
      .then((res) => {
        setIsLoading(false);
        const j = res.data;
        if (j.error === 0) {
          setRes(JSON.stringify(j));
          setError('');
        } else {
          setError(JSON.stringify(j));
          setRes('');
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(JSON.stringify(err));
        setRes('');
      });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <Loader loading={isLoading} label={'Loading data...'} />
      <Text style={styles.text}>SMS Test</Text>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          value={ip}
          onChangeText={(value) => setIp(value)}
        />
      </View>

      <View style={styles.view}>
        <TextInput
          style={styles.input}
          value={port}
          onChangeText={(value) => setPort(value)}
        />
      </View>

      <View style={styles.view}>
        <Text style={styles.label}>Enter Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
      </View>

      <View style={styles.view}>
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <View style={[styles.view, styles.errorView]}>
        <Text style={styles.res}>{res}</Text>
      </View>

      <View style={[styles.view, styles.errorView, { marginBottom: 30 }]}>
        <Text style={styles.error}>{error}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    width: '100%',
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#32db5f',
    padding: 12,
    width: '50%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
  },
  label: {
    color: '#fff',
    fontSize: 18,
  },
  error: {
    color: 'red',
    fontSize: 20,
  },
  errorView: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    width: '90%',
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff',
  },
  res: {
    color: '#fff',
    fontSize: 25,
  },
});

export default Home;
