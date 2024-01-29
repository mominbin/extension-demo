import imageModule from '../../utils/importImages';
import Carousel from '../../components/Carousel';
import Style from './Style.module.scss';
const TestCarousel = () => {
  const images = [
    // imageModule['j10.webp'],
    imageModule['wz1.png'],
    imageModule['wz2.png'],
  ];

  return (
    <Carousel windowWidth={300 * 2}>
      <div className={Style.container}>
        <img className={Style.img} src={images[0]} alt="carousel" />
        <img className={Style.img} src={images[1]} alt="carousel" />
      </div>
    </Carousel>
  );
};
export default TestCarousel;
