import {connect} from 'react-redux'
import Main from './Main'
import * as a from '../actions'
import * as s from '../selectors'

const mapStateToProps = (state) => {
	return {
		isSayingHello: s.isSayingHello(state),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sayHello: () => dispatch(a.sayHello()),
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)

export default Container
