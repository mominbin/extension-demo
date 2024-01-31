import { FormattedMessage } from 'react-intl';
import ScreenShotsStyle from './ScreenShots.module.scss';
import images from '../../utils/importImages';
import Carousel from '../../components/Carousel';
import messages from '../common.messages';
const ScreenShots = () => {
  const imagesList = [
    'app1.png',
    'app2.png',
    'app3.png',
    'app4.png',
    'app5.png',
  ];
  const imageList = imagesList.map((item) => images[item]);
  return (
    <section id="screenshots" className={ScreenShotsStyle.ssContainer}>
      <div className={ScreenShotsStyle.containerFluid}>
        <div className={ScreenShotsStyle.ssHeaderContainer}>
          <div className={ScreenShotsStyle.header}>
            <FormattedMessage {...messages.ScreenShotHeader} />
          </div>
        </div>
        <Carousel windowWidth={300 * 5} hideArraw={true}>
          <div className={ScreenShotsStyle.ssItemContainer}>
            {imageList.map((item, index) => (
              <div key={index} className={ScreenShotsStyle.imageBox}>
                <img src={item} className={item} alt="" />
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default ScreenShots;
