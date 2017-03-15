import {
  TOGGLE_SHOW_HIDE_DETAILS
} from '../actions/showHideEventDetails'

let initialState = {
  more: false
}

let showDetails = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_SHOW_HIDE_DETAILS:
      return { more: !state.more }
    default:
      return state;
  }
}

export default showDetails;
