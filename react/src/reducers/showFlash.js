import {
  TOGGLE_FLASH
} from '../actions/toggleFlash'

let initialState = true

let showFlash = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FLASH:
      return action.visible
    default:
      return state;
  }
}

export default showFlash;
