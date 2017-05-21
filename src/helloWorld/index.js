import * as actions from './actions'
import * as actionTypes from './actionTypes'
import MainContainer from './components/MainContainer'
import * as constants from './constants'
import reducer from './reducer'
import * as selectors from './selectors'

export default {
  name: constants.NAME,
  actionTypes,
  actions,
  components: {
    Main : MainContainer
  },
  reducer,
  selectors,
}
