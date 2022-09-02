import { FavoritesProviderState } from "./FavoritesProvider";

export type FavoritesProviderAction = {
	type: '[Favorite] ADD_MOVIE';
	payload: {
		id: string;
		title: string;
		poster_path: string;
	};	
} | {
	type: '[Favorite] REMOVE_MOVIE';
	payload: {
		id: string;
	};
}

export const FavoriteReducer = (state: FavoritesProviderState, action: FavoritesProviderAction): FavoritesProviderState => {
	switch (action.type) {
		case '[Favorite] ADD_MOVIE': {
			return {
				...state,
				favoritesMovies: [...state.favoritesMovies, action.payload]
			};
		}
		case '[Favorite] REMOVE_MOVIE': {
			return {
				...state,
				favoritesMovies: state.favoritesMovies.filter(movie => movie.id !== action.payload.id)
			};
		}
		
		default:
			return state;
	}
}