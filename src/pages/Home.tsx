import { Grid, Loading, Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { MoviesServices } from '../services/Services';
import { ResponseMovie } from '../types/types';

const Home = () => {
  const [movies, setMovies] = useState<ResponseMovie>();
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  const fetchMovies = async (page?: number) => {
    const data = await MoviesServices.findAll(page);

    if (data.status === 200) {
      setMovies(data.data);
      setLoaded(true);
    } else {
      setError(data.statusText);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Grid.Container gap={4} css={{ padding: '2% 13%' }}>
      {!loaded && <Loading loadingCss={{ $$loadingSize: '100px', $$loadingBorder: '10px' }} />}
      <Grid xs={12}>
        <Pagination
          css={{ margin: '0 auto' }}
          total={movies?.total_pages}
          onChange={(page) => {
            fetchMovies(page);
          }}
        />
      </Grid>
      {movies?.results?.map((movie) => (
        <Grid xs={4}>
          <MovieCard
            key={movie.id}
            id={movie.id}
            tittle={movie.title}
            poster_path={movie.poster_path}
          />
        </Grid>
      ))}
      ?
    </Grid.Container>
  );
};

export default Home;
