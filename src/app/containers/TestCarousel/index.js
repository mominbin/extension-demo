import imageModule from '../../utils/importImages';
import CarouselFactory from '../../components/Carousel/CarouselFactory';
const TestCarousel = () => {
  const images = [
    imageModule['j10.webp'],
    imageModule['j20.webp'],
    imageModule['j31.webp'],
  ];

  return <CarouselFactory images={images} />;
};
export default TestCarousel;
