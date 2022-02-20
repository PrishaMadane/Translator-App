import * as React from 'react';
import {
  Text,  
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from './localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      translate : [],
      inenglish: []
    };
  }
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <Header
          backgroundColor={'black'}
          centerComponent={{
            text: 'Translator App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={require("./assets/translatorimage.png")}
        />

       <TextInput 
       style={styles.inputBox}
       onChangeText={text =>{
         this.setState({
           text: text
         });
       }}
       value={this.state.text}
       />

       <TouchableOpacity style={styles.button}
       onPress={()=>{
         this.setState({ translate : db[this.state.text].translate})
         this.setState({ inenglish : db[this.state.text].inenglish})
         
       }}>
       <Text style={styles.buttonText}> Translate </Text>
       </TouchableOpacity>
      
      <View> {
        this.state.translate.map(item=>{ 
          return( 
            <Text style={styles.displayText}> {item} 
          </Text> ) })} 
          </View> 
          
          <View> 
          {this.state.inenglish.map(item=>{ 
            return( 
              <Text style={styles.inenglishText}> {item} 
              </Text> ) })} 
              </View>
     

      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF6FA',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
    marginTop:30
  },
  inputBox:{
    marginTop:50,
    width:'80%',
    height:40,
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none'
  },
  button:{
    width: '40%',
    height:42,
    padding:10,
    margin:23,
    alignSelf:'center',
    backgroundColor: '#EEB6BB',
    borderRadius: 100
  },
  buttonText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
  },
  displayText:{
    textAlign:"center",
    color:"purple",
    fontSize:20
  },
  inenglishText:{
    textAlign:"center",
    color:"black",
    fontSize:15
  }
});
