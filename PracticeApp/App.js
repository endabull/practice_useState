import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [myValue,setMyValue] = useState({
    oddeven:'even',
    counter:0,
  })
  
  useEffect(()=>{
    setMyValue({counter:0,oddeven:'even'})
  },[])
  

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center', padding:10,}}>
      <View style={{flexDirection:'row', width:'100%',justifyContent:'space-around', 
      backgroundColor:myValue.oddeven == 'even' ? "gray" :  "white" }}>
      <TouchableOpacity onPress={() =>{
         const currentVal = myValue.counter - 1
         currentVal < 1 ? setMyValue({counter : 0}) : setMyValue({counter : currentVal})
         currentVal < 1 ? setMyValue({counter : 0,oddeven:'even'}) : currentVal % 2 == 0 ? setMyValue({oddeven:'even',counter : currentVal}): setMyValue({oddeven:'odd',counter : currentVal})
      }} style={{backgroundColor:'red', padding: 10, borderRadius: 10,}}>
      <Text style={{fontSize:30,fontWeight:'bold',}}>-</Text>
      </TouchableOpacity>
      <Text style={{color:'red'}}>{myValue.oddeven}</Text>
      <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'center',color:'black'}}>{myValue.counter}</Text>
      <TouchableOpacity onPress={() =>{
        const currentVal = myValue.counter +1
        setMyValue({counter : currentVal})
        currentVal % 2 == 0 ? setMyValue({oddeven:'even',counter : currentVal}): setMyValue({oddeven:'odd',counter : currentVal})
      }} style={{backgroundColor:'green', padding: 10, borderRadius: 10,}}>
        <Text style={{fontSize:30,fontWeight:'bold',}}>+</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default App