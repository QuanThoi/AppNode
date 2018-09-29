import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Box extends Component{
	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.box1} />
				<View style = {styles.box2} />
				<View style = {styles.box3} />
			</View>
		)
	}
}

export default Box;

const styles = StyleSheet.create({
	container:{
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		height: 600,
	},

	box1:{
		backgroundColor: 'red',
		width: 200,
		height: 200,
	},

	box2:{
		backgroundColor: 'black',
		width: 100,
		height: 100,
	},

	box3:{
		backgroundColor: 'blue',
		width: 100,
		height: 100,
	},
})