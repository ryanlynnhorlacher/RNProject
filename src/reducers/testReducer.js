

const testReducer = (state = {}, action) => {
	switch(action.type){
		case 'TEST':
			state = 'THIS IS THE NEW STATE... and Redux works'
		break;
	}
	console.log(state)
	return state
}

export default testReducer