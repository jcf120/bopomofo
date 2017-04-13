import {connect} from 'react-redux'
import Main from './Main'
import * as a from '../actions'

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)

export default Container
