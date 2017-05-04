import {
  SELECT_DETAIL
} from '../actions/selectDetail'

let initialState = 'itinerary';

let selectedDetail = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_DETAIL:
      return action.detail
    default:
      return state;
  }
}

export default selectedDetail;
