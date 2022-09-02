import { createContext, useReducer, Dispatch, FC, useContext, PropsWithChildren } from 'react';
import { FavoriteReducer, FavoritesProviderAction } from './FavoriteReducer';

type FavoriteMovie = {
  id: string;
  title: string;
  poster_path: string;
};

export interface FavoritesProviderState {
  favoritesMovies: FavoriteMovie[];
}

type FavoritesContexProps = {
  favoritesState: FavoritesProviderState;
  dispatch: Dispatch<FavoritesProviderAction>;
};

export const initialFavoriteState: FavoritesProviderState = {
  favoritesMovies: [],
};

const FavoriteContextProvider = createContext<FavoritesContexProps>({
  favoritesState: initialFavoriteState,
  dispatch: () => {
    return;
  },
});
const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favoritesState, dispatch] = useReducer(FavoriteReducer, initialFavoriteState);
  return (
    <FavoriteContextProvider.Provider value={{ favoritesState, dispatch }}>
      {children}
    </FavoriteContextProvider.Provider>
  );
};

const useFavoritesContext = (): FavoritesContexProps => useContext(FavoriteContextProvider);

export { FavoriteProvider, useFavoritesContext };
