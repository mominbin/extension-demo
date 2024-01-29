import { useEffect, useRef } from 'react';
import Style from './Style.module.scss';

const CarouselFactory = (props) => {
  const listRef = useRef(null);
  let currentImageIndex = 1;
  const count = props.images.length;
  const previousImage = () => {
    currentImageIndex = currentImageIndex === 1 ? count : currentImageIndex - 1;
    if (currentImageIndex === count) {
      listRef.current.style.transition = 'none';
      listRef.current.style.transform = `translateX(-${count * 100}%)`;
      requestAnimationFrame(() => {
        moveTo(currentImageIndex);
      });
    } else {
      moveTo(currentImageIndex);
    }
  };
  const nextImage = () => {
    currentImageIndex = currentImageIndex === count ? 1 : currentImageIndex + 1;
    console.log('current image is:', currentImageIndex);
    if (currentImageIndex === 1) {
      listRef.current.style.transition = 'none';
      listRef.current.style.transform = `translateX(100%)`;
      requestAnimationFrame(() => {
        moveTo(currentImageIndex);
      });
    } else {
      moveTo(currentImageIndex);
    }
  };
  const moveTo = (index) => {
    listRef.current.style.transition = 'transform 0.5s ease';
    listRef.current.style.transform = `translateX(-${100 * (index - 1)}%)`;
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={Style.container}>
      <div className={Style.carouselContainer}>
        <div ref={listRef} className={Style.carouselList}>
          <div className={Style.item}>
            <img src={props.images[props.images.length - 1]} alt="" />
          </div>
          {props.images.map((image, index) => (
            <div key={index} className={Style.item}>
              <img src={image} alt="" />
            </div>
          ))}
          <div className={Style.item}>
            <img src={props.images[0]} alt="" />
          </div>
        </div>
      </div>
      <div>
        <a className={Style.btn} onClick={() => previousImage()}>
          previous image
        </a>
        <a className={Style.btn} onClick={() => nextImage()}>
          next image
        </a>
      </div>
    </div>
  );
};
export default CarouselFactory;
