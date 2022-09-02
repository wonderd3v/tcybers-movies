import { Card, Row, Text } from '@nextui-org/react';
import { Movie } from '../types/types';
import { environment } from '../config/Enviroment';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  id?: number;
  tittle?: string;
  poster_path?: string;
}

export const MovieCard = (movie: MovieCardProps) => {
  const { tittle, poster_path, id } = movie;
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate('/details/' + id)} isPressable>
      <Card.Body css={{ p: 1 }}>
        <Card.Image
          src={environment.imagesUrl + poster_path}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={tittle}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: 'flex-start' }}>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text b>{tittle}</Text>
          <Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}>
            Details
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
