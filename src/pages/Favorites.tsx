import { Grid } from '@nextui-org/react';
import { useFavoritesContext } from '../context/Favorites/FavoritesProvider';
import { MovieCard } from '../components/MovieCard';

export const Favorites = () => {
  const { favoritesState } = useFavoritesContext();
  const { favoritesMovies } = favoritesState;
  return (
    <Grid.Container gap={4} css={{ padding: '2% 13%' }}>
      {favoritesMovies.map((movie) => (
        <Grid xs={4}>
          <MovieCard
            key={movie.id}
            id={parseInt(movie.id)}
            tittle={movie.title}
            poster_path={movie.poster_path}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};
