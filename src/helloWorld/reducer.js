import * as t from './actionTypes'
import * as constants from './constants'

const reducer = (state = constants.INIT_STATE, action) => {
  switch(action.type) {
  	case t.SAY_HELLO : {
  		return state.set("isSayingHello", true)
  	}
    default:
      return state
  }
}

export default reducer
