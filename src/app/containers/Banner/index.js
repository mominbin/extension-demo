import { FormattedMessage } from 'react-intl';
import bannerStyle from '../../styles/banner.module.scss';
import messages from './messages';
import GradientBorderButton from '../../components/GradientBorderButton';
import MovingBubble from '../../components/MovingBubble';

const Banner = () => (
  <section id="home" className="banner-two">
    <MovingBubble customClass="shape1"></MovingBubble>
    <MovingBubble customClass="shape2"></MovingBubble>
    <MovingBubble customClass="shape3"></MovingBubble>
    <MovingBubble customClass="shape4"></MovingBubble>
    <div className="container">
      <div className={bannerStyle.row}>
        <div>
          <h3 className="banner-two-title">
            <FormattedMessage {...messages.header1} />
            <br />
            <span>
              <FormattedMessage {...messages.header2} />
            </span>
            <br />
            <FormattedMessage {...messages.header3} />
          </h3>
          <p className="banner-two-text">
            <FormattedMessage {...messages.description} />
          </p>
          <GradientBorderButton
            formattedMessage={messages.buttonText}
          ></GradientBorderButton>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
