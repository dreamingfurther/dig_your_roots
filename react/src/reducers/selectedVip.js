import {
  SELECT_VIP_PROFILE
} from '../actions/selectVipProfile'

let initialState = 'Tibby Pillsbury';

let selectedVip = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_VIP_PROFILE:
      return action.name
    default:
      return state;
  }
}

export default selectedVip;
