import { Movie } from '../types/types';
import { Card, Grid, Text, Avatar, Image, Row, Spacer, Button, Switch } from '@nextui-org/react';
import { environment } from '../config/Enviroment';
import { useFavoritesContext } from '../context/Favorites/FavoritesProvider';

import { useEffect, useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';

export const MovieDetails = (movie: Movie & { favorite: boolean }) => {
  const { dispatch } = useFavoritesContext();

  const [favorite, setFavorite] = useState<boolean>();
  const handleFavorite = (isFavorite: boolean) => {
    if (isFavorite) {
      dispatch({
        type: '[Favorite] ADD_MOVIE',
        payload: {
          poster_path: movie.poster_path!,
          title: movie.title!,
          id: movie.id!.toString(),
        },
      });
    } else {
      dispatch({
        type: '[Favorite] REMOVE_MOVIE',
        payload: {
          id: movie.id!.toString(),
        },
      });
    }
  };

  useEffect(() => {
    setFavorite(movie.favorite);
  }, [movie.favorite]);

  return (
    <Card css={{ p: '$6', mw: '600px', margin: 'auto' }}>
      <Card.Header>
        <Grid.Container css={{ pl: '$6' }}>
          <Image alt="nextui logo" src={environment.imagesUrl + movie?.poster_path} />
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: '$5' }}>
        <Grid xs={11}>
          <Text h3 css={{ lineHeight: '$xs' }}>
            {movie?.title}
          </Text>
          <Spacer />
          <HeartSwitch
            size="sm"
            inactiveTrackFillColor="#ffbaba"
            inactiveTrackStrokeColor="#ff0000"
            activeTrackFillColor="#ff0000"
            activeTrackStrokeColor="#ff0000"
            inactiveThumbColor="#ecfeff"
            activeThumbColor="#ecfeff"
            checked={favorite}
            onChange={(event) => {
              setFavorite(event.target.checked);
              handleFavorite(event.target.checked);
            }}
          />
        </Grid>

        <Spacer y={1} />
        <Grid xs={12}>
          <Text>{movie?.overview}</Text>
        </Grid>
      </Card.Body>
      <Card.Footer>
        <Grid.Container css={{ pl: '$2' }}>
          <Row>
            <Text css={{ color: '$accents8' }}>Release date: {movie?.release_date}</Text>
          </Row>
          <Row>
            <Text css={{ color: '$accents8' }}>
              Rating:{' '}
              <Avatar text={movie?.vote_average?.toString()} color="error" textColor="white" />
            </Text>
          </Row>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};
