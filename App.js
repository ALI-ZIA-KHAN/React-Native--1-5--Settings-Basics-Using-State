import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TextInput} from 'react-native';

export default function App() {


  const [name,setName]=useState('ALI');
  // const [person,setPerson]=useState({name:'Imran',age:40});

  const [age,setAge]=useState('30');

  // const clickHandler =()=>{
  //   setmyName('I Khan');
  //   setPerson({name:"Lugi",age:30})
  // }

  return (
    <View style={styles.container}>

      {/* <View style={styles.header}> */}




<Text>Enter your Name</Text>
<TextInput 
multiline
// input can be of multiline now
style={styles.input} 
placeholder='e.g John Doe'
// whenever we uses any func with like onChnTxt etc then we automat get the value of inpfield in val & we used it here
onChangeText={(val)=> setName(val)} />


<Text>Enter your Age</Text>
<TextInput 
style={styles.input}
keyboardType='numeric'
// numeric keypad appears for input
placeholder='e.g 18'
onChangeText={(val)=> setAge(val)} />

    
    
  <Text style={styles.boldText}>My name is {name} and age is  {age}</Text>
      
      
      
      
      
        {/* <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}.</Text> */}
      {/* </View> */}











      {/* <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
        
      </View> */}
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
  // header:{
  //   backgroundColor:"pink",
  //   padding:20,
  // },
  // boldText:{
  //   fontWeight:"bold",
  // },
  // body:{
  //   backgroundColor:"yellow",
  //   padding:20
  // },
  // buttonContainer:{
  //   marginTop:20
  // }
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  }
});
