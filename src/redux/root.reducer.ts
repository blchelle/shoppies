import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

import { nominationsReducer } from './nominations/nominations.reducer'
import { themeReducer } from './theme/theme.reducer'
import Movie from '../types/Movie.type'
import { persistReducer } from 'redux-persist'

export const config = {
	key: 'root',
	storage,
}

interface IAppState {
	theme: 'light' | 'dark'
	nominations: Movie[]
}

const rootReducer = combineReducers<IAppState>({
	nominations: nominationsReducer,
	theme: themeReducer,
})

export const persisted = persistReducer(config, rootReducer)

export type RootState = ReturnType<typeof rootReducer>
