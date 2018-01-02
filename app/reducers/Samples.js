import createReducer from '../utilities/createReducer'
import {LEFT,RIGHT,RESET} from '../constants/ActionTypes'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
	Left: 0,
	Right: 0
};
const actionMaps = {
	[LEFT]: (state, action) => ({
		...state,
		Left: state.Left + 1
	}),
	[RIGHT]: (state, action) => ({
		...state,
		Right: state.Right + 1
	}),
	[RESET]: (state, action) => {
		return initialState;
	}
	// Do something at REHYDRATE (when persisted store loads from storage)
	//[REHYDRATE]: (state, action) => {
	//	return state;
	//}
}

export default createReducer(initialState, actionMaps);