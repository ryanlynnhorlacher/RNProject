import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {test} from './../actions/testActions'

class App extends React.Component{
	constructor(props){
		super(props)
	}

	render() {
		return(
			<View style={{
				marginTop: 22, 
				flexDirection: 'column', 
				justifyContent: 'center'
			}}>
				<Text>
					This is the App Component!!
				</Text>
				<Text>
					Click this button to make sure Redux works.
				</Text>
				<TouchableOpacity 
					onPress={this.props.test}
					style={{
						backgroundColor: 'green',
						width: 70,
						borderRadius: 5
					}}
				>
					<Text style={{color: 'white'}}>
						Click and check console
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		testString: state.test
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		test: () => {
			dispatch(test())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)