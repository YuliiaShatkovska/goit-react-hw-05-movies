import { Container } from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import { ReviewsHeading, ReviewsList, ReviewsText } from './Reviews.styled';
import Message from 'components/ReviewsText/ReviewsText';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async () => {
      try {
        const resp = await getMovieReviews(movieId);
        setData(resp);
      } catch (err) {
        Notiflix.Notify.failure(err);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {data.length > 0 ? (
        <ReviewsList>
          {data.map(review => (
            <li key={review.id}>
              <ReviewsHeading>Author: {review.author}</ReviewsHeading>
              <ReviewsText>{review.content}</ReviewsText>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <Message />
      )}
    </Container>
  );
};

export default Reviews;
