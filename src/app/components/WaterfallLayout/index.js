import { useEffect, useState } from 'react';
import Style from './Style.module.scss';

const WaterfallLayout = (props) => {
  const IMAGE_WIDTH = 350;
  const PADDING_TOP = 10;
  const PADDING_RIGHT = 0;
  const [imagesObject, setImagesObject] = useState([]);
  const [screenWidth, setScreenWidth] = useState(
    document.documentElement.clientWidth,
  );
  let col = Math.floor(screenWidth / IMAGE_WIDTH);
  const getHeight = (index) => {
    let height = 0;
    let lastIndex = index - col;
    while (lastIndex >= 0) {
      height += PADDING_TOP;
      height += imagesObject[lastIndex];
      lastIndex -= col;
    }
    return height;
  };
  const handleResize = () => {
    setScreenWidth(document.documentElement.clientWidth);
    col = Math.floor(screenWidth / IMAGE_WIDTH);
    window.console.log(screenWidth, col);
  };
  const getMaxHeight = () => {
    let maxHeight = 0;
    imagesObject.forEach((item, index) => {
      const height = getHeight(index) + imagesObject[index];
      maxHeight = height > maxHeight ? height : maxHeight;
    });
    return maxHeight;
  };
  const getWidth = () => col * (IMAGE_WIDTH + PADDING_RIGHT) - PADDING_RIGHT;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    const temp = [];
    document.querySelectorAll(`.${Style.item} > img`).forEach((item) => {
      temp.push(item.offsetHeight);
    });
    setImagesObject(temp);
  }, [screenWidth]);
  const calPosition = (index) => {
    const rowPosition = index % col;
    const left = rowPosition * IMAGE_WIDTH;
    const top = getHeight(index);
    return [top, left];
  };
  return (
    <div
      className={Style.container}
      style={{ height: `${getMaxHeight()}px`, width: `${getWidth()}px` }}
    >
      {props.images.map((item, index) =>
        imagesObject.length === 0 ? (
          <div className={Style.item} key={index}>
            <img src={item} className={Style.img} alt={''} />
          </div>
        ) : (
          <div
            key={index}
            className={Style.item}
            style={{
              top: `${calPosition(index)[0]}px`,
              left: `${calPosition(index)[1]}px`,
            }}
          >
            <img src={item} className={Style.img} alt={''} />
          </div>
        ),
      )}
    </div>
  );
};
export default WaterfallLayout;
