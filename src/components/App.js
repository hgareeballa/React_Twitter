import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
//import LoadingBar from 'react-redux-loading'
import LoadingPage from './Loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? <LoadingPage/>
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)

/*import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingPage from './Loading'
//import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (      
      <div>
        {this.props.loading === true
          ? <LoadingPage/>
          : <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
   loading: state.loading
  }  
}


export default connect(mapStateToProps)(App)
*/