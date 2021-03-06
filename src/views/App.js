import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import history from 'services/history'
import DevTools from 'components/DevTools'
import Landing from './Landing'
import Repos from './Repos'
import Commits from './Commits'

import './app.scss'

const App = ({ store }) => (
  <Provider store={store}>
    <div styleName='main'>
      {process.env.NODE_ENV !== 'production' && <DevTools />}

      <div styleName='backdrop' />
      <MuiThemeProvider>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/repos' component={Repos} />
            <Route exact path='/repos/:name/commits' component={Commits} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
