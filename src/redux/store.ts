import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import { persisted } from './root.reducer'

const middlewares = process.env.NODE_ENV === 'production' ? [] : [logger]

// Create the redux store
export const store = createStore(persisted, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
