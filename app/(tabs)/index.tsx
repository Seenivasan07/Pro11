import react from 'react';
import { Text, View,  StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <TextInput style={styles.textinput} placeholder='username'/>
        <Button  title='Add '/>
      </View>
      <View>
        <TextInput placeholder='Password'/>
        <Button title='Addd' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding :50,
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flexDirection :"row",
    color: '#fff',
    margin:10,
   
    justifyContent :"space-between",
   
  },
  textinput:{
    width :"80%",
    borderWidth:2,
    borderColor:"#cccccc",
    marginRight :8,
    padding :8,
  }
});