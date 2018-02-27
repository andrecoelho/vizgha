import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/ignoreElements'

const GRAPHQL_URL = 'https://api.github.com/graphql'

export default (token, body) =>
  Observable.ajax({
    url: GRAPHQL_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(body)
  })
