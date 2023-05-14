import React from 'react';
import { Container, IconButton } from '@mui/material';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import movies from './mock.json';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const a = 1;
// console.log(a);
const SimilarMoviesCarousel = () => {
  // const { SimilarMovies, setSimilarMovies } = useState([]);
  // useEffect(
  //   (id) => {
  //     fetch(`/api/movies/id=${id}`)
  //       .then((res) => res.json())
  //       .then((movie) => {
  //         setSimilarMovies(movie);
  //         fetch(`/api/movies/category/categoryId=${movie.category_id}`)
  //           .then((res) => res.json())
  //           .then((data) => {
  //             setSimilarMovies(data);
  //           });
  //       })
  //       .catch((error) => {
  //         throw error.message;
  //       });
  //   },
  //   [setSimilarMovies],
  // );

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };
  const slider = React.useRef(null);
  return (
    <Container
      sx={{
        border: 1,
        width: 1518,
        height: 300,
        disableGutters: true,
        position: 'absolute',
        top: 2000,
      }}
    >
      <h3 className="carousel-title">| SIMILAR MOVIES</h3>
      <div style={{ display: 'flex' }}>
        <IconButton onClick={() => slider?.current?.slickPrev()}>
          <ArrowBackIosIcon style={{ fill: '#00FFC2' }} fontSize="large" />
        </IconButton>
        <div className="view-carousel">
          <Slider {...settings} ref={slider}>
            {movies.map((item) => (
              <div key={item.description} className="box">
                <a href="https://github.com/HackYourFuture-CPH/CINEMANIA">
                  <img src={item.image_location} alt={item.title} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <IconButton onClick={() => slider?.current?.slickNext()}>
          <ArrowForwardIosIcon style={{ fill: '#00FFC2' }} fontSize="large" />
        </IconButton>
      </div>
    </Container>
  );
};

export default SimilarMoviesCarousel;
