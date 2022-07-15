import React,{Component} from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

export default class WeatherScreen extends Component {

  constructor(){
    super();
    this.state={
      weather: ''
    }
  }

  getWeather=async ()=>{
  var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35lon=139'
  return fetch(url).then((response)=>{response.json()})
  .then((responseJson)=>{this.setState({weather:responseJson})})
  }
 
  componentDidMount=()=>{
  this.getWeather()
  }

  render(){
   
     if(this.state.weather===''){
      return (
 <View>
 <Text>Loading..</Text>
 </View>
      )
     }  
     else{
       return(
         <View>
           <Text>Weather Forecast</Text>
           <View>
             <Text>{this.state.weather.main.temp}&deg;C </Text>
           </View>
         </View>
         
       )
     } 
      
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
