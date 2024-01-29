import { useEffect, useRef } from 'react';
import Style from './Style.module.scss';

const Carousel = (props) => {
  const listRef = useRef(null);
  const containerRef = useRef(null);
  let currentImageIndex = 1;
  const count = 1;
  const transferTime = 2500;
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
    listRef.current.style.transition = `transform ${transferTime}ms ease`;
    listRef.current.style.transform = `translateX(-${100 * (index - 1)}%)`;
  };
  useEffect(() => {
    window.console.log(props.windowWidth);
    containerRef.current.style.width = `${props.windowWidth}px`;
    const interval = setInterval(nextImage, transferTime * 2);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={Style.container}>
      <div ref={containerRef} className={Style.carouselContainer}>
        <div ref={listRef} className={Style.carouselList}>
          <div className={Style.item}>{props.children}</div>
          <div className={Style.item}>{props.children}</div>
          <div className={Style.item}>{props.children}</div>
        </div>
      </div>
      {props.hideArraw ? null : (
        <div>
          <a className={Style.btn} onClick={() => previousImage()}>
            previous image
          </a>
          <a className={Style.btn} onClick={() => nextImage()}>
            next image
          </a>
        </div>
      )}
    </div>
  );
};
export default Carousel;
