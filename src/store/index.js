import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { persistState } from 'redux-devtools'
import { createLogger } from 'redux-logger'

import DevTools from 'components/DevTools'

import rootEpic from './epics'
import rootReducer from './reducers'

const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  return matches && matches.length > 0 ? matches[1] : null
}

const configureStore = (initialState = {}) => {
  const middleware = [createEpicMiddleware(rootEpic)]

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(
      createLogger({
        collapsed: true,
        logger: console,
        level: {
          prevState: 'debug',
          action: 'debug',
          nextState: 'debug',
          error: 'error'
        }
      })
    )
  }

  const enhancers = [applyMiddleware(...middleware)]

  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(DevTools.instrument())
    enhancers.push(persistState(getDebugSessionKey()))
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers))

  // For hot reloading of react components
  // Also for debugging
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore()
