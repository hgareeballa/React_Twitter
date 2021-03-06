import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
//import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'
export const SHOW_LOADING = ' SHOW LOADING'


export function handleInitialData () {
  return (dispatch) => {
    dispatch(myLoading(true))
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(myLoading(false))
      })
  }
}

export function myLoading(loading){
  return {
    type: SHOW_LOADING,
    loading
  }
}

