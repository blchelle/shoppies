import { ADD_NOMINATION, DELETE_NOMINATION, NominationActionTypes } from './nominations.types'
import Movie from '../../types/Movie.type'

export function nominationsReducer(state: Movie[] = [], action: NominationActionTypes): Movie[] {
	switch (action.type) {
		case ADD_NOMINATION:
			return [...state, action.payload]
		case DELETE_NOMINATION:
			return state.filter(({ imdbID }) => imdbID !== action.payload.imdbID)
		default:
			return state
	}
}
