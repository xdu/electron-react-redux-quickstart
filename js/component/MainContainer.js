import React from 'react'
import { connect } from 'react-redux'
import { getVersion } from '../action/version'

class MainContainer extends React.Component {
	
	constructor( props ) {
		super( props );
        this.props.load()
	}
	
	render() {
		return (
			<div className="container">
                <div className="page-header">
                    <h1>Electron</h1>
                </div>
                <div className="well col-sm-4">
                    node version : {this.props.version.node}
                </div>
			</div>
		)
	}
	
}

const select = (store) => {
	return {
		version: store.version
	}
}

const actions = (dispatch) => {
	return {
		load: () => dispatch( getVersion() ),
	}
}

export default connect(select, actions)(MainContainer)
