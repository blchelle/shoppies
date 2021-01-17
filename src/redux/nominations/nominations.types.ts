import Movie from '../../types/Movie.type'

export const ADD_NOMINATION = 'ADD_NOMINATION'
export const DELETE_NOMINATION = 'DELETE_NOMINATION'

export interface AddNominationAction {
	type: typeof ADD_NOMINATION
	payload: Movie
}

export interface DeleteNominationAction {
	type: typeof DELETE_NOMINATION
	payload: Movie
}

export type NominationActionTypes = AddNominationAction | DeleteNominationAction
