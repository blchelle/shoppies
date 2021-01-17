import { NominationActionTypes, ADD_NOMINATION, DELETE_NOMINATION } from './nominations.types'
import Movie from '../../types/Movie.type'

export function addNomination(movie: Movie): NominationActionTypes {
	return {
		type: ADD_NOMINATION,
		payload: movie,
	}
}

export function deleteNomination(movie: Movie): NominationActionTypes {
	return {
		type: DELETE_NOMINATION,
		payload: movie,
	}
}
