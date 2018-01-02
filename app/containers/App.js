import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as SampleActions from '../actions/sampleActions'
import Sample from '../components/Sample'

const mapStateToProps = (state, ownProps) => ({
	left: state.Samples.Left
	, right: state.Samples.Right
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: R.mergeAll([
		bindActionCreators(SampleActions, dispatch)
	])
})

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	static defaultProps = {
		left: 0
		, right: 0
	}
	static propTypes = {
		left: PropTypes.number.isRequired
		, right: PropTypes.number.isRequired
		, actions: PropTypes.objectOf(PropTypes.func).isRequired
	}
	render() {
		return(
			<Sample
				left={this.props.left}
				right={this.props.right}
				leftAction={this.props.actions.leftAction}
				rightAction={this.props.actions.rightAction}
				resetAction={this.props.actions.resetAction}
			/>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);