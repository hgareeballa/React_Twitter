import { SHOW_LOADING } from '../actions/shared'

export default function loading (state = {}, action) {
  switch(action.type) {
    case SHOW_LOADING :
      return action.loading
    default :
      return false
  }
}