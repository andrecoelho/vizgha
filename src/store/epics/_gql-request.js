import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/ignoreElements'

const GRAPHQL_URL = 'https://api.github.com/graphql'

export default (token, query) =>
  Observable.ajax({
    url: GRAPHQL_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      query: `query { ${query.replace(/\s*\r?\n\s*/g, ' ')} }`
    })
  })
