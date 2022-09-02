import { Movie } from '../types/types';
import { useParams } from 'react-router-dom';
import { Container, Loading } from '@nextui-org/react';
import { MoviesServices } from '../services/Services';
import { useEffect, useState } from 'react';
import { MovieDetails } from '../components/MovieDetails';
import { useFavoritesContext } from '../context/Favorites/FavoritesProvider';

const Details = () => {
  const {
    favoritesState: { favoritesMovies },
  } = useFavoritesContext();

  const [movie, setMovie] = useState<Movie & { favorite: boolean }>();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  const { idMovies } = useParams();

  const fetchMovie = async () => {
    const data = await MoviesServices.findOne(idMovies);
    if (data.status === 200) {
      const isFavorite =
        favoritesMovies.findIndex((item) => item.id === data.data.id.toString()) >= 0;

      setMovie({ ...data.data, favorite: isFavorite });
      setLoaded(true);
    } else {
      setError(data.statusText);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <Container style={{ padding: '3% 20%' }}>
      {!loaded && <Loading loadingCss={{ $$loadingSize: '100px', $$loadingBorder: '10px' }} />}
      <MovieDetails {...movie} favorite={movie?.favorite!} />
    </Container>
  );
};

export default Details;
