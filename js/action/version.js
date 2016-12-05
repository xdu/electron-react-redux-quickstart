export function getVersion() {
	return (dispatch) => {
		return dispatch({ 
            type: 'NODE_VERSION_FULFILLED', 
            payload: process.version
            })
    }
}
