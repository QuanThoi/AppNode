import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class list extends Component{
	lst={
		names: [
         {
            id: 0,
            name: 'Truc',
         },
         {
            id: 1,
            name: 'Thoi',
         },
         {
            id: 2,
            name: 'An',
         },
         {
            id: 3,
            name: 'Phuc',
         }
      ]
	}

	alertItem(item){
		alert(item.name)
	}

	render(){
		return(
			<View>
				{ 
				this.lst.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {()=>this.alertItem(item)}
                     >
                     
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
				}
			</View>
		)
	}
}

export default list

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
