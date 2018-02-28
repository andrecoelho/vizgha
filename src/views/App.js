import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import history from 'services/history'
import DevTools from 'components/DevTools'
import Landing from './Landing'

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      {process.env.NODE_ENV !== 'production' && <DevTools />}

      <MuiThemeProvider>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Landing} />
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
