'use strict'

const initial = { node: '' };

const version = (state = initial, action) => {
	switch( action.type ) {
		case 'NODE_VERSION_FULFILLED':
			return { node: action.payload }
		default: 
			return state;
	}
}

export default version;