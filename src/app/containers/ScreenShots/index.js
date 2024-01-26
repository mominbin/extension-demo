import ScreenShotsStyle from './ScreenShots.module.scss';
import imageModule from '../../utils/importImages';
const ScreenShots = () => {
  const imageList = [
    'app1.png',
    'app2.png',
    'app3.png',
    'app4.png',
    'app5.png',
  ].map((item) => imageModule[item]);
  const clone = [1, 1, 1];
  return (
    <section id="screenshots" className={ScreenShotsStyle.ssContainer}>
      <div className={ScreenShotsStyle.containerFluid}>
        <div className={ScreenShotsStyle.ssHeaderContainer}>
          <div className={ScreenShotsStyle.header}>
            Checkout this plugin Interface Screenshots.
          </div>
        </div>
        <div className={ScreenShotsStyle.ssContent}>
          {clone.map(() => (
            <div className={ScreenShotsStyle.ssStageOuter}>
              {imageList.map((item, index) => (
                <div className={ScreenShotsStyle.item} key={index}>
                  <img src={item} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ScreenShots;
