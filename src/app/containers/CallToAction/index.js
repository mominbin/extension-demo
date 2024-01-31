import { FormattedMessage } from 'react-intl';
import exp1 from '../../mediums/imgs/exp1.gif';
import messages from './messages';
import sprite from '../../mediums/imgs/sprite.svg';
import Style from './Style.module.scss';

const CallToAction = () => (
  <section id="calltoaction" className="ca-section">
    <div className="container calltoaction">
      <img src={exp1} alt="" className="ca-image" />
      <div className="ca-description-container">
        <div className="ca-description-content">
          <i className="ca-icon" />
          <svg className={Style.headerIcon} color={'#ff4eb5'}>
            <use xlinkHref={`${sprite}#layers`}></use>
          </svg>
          <h2 className="ca-title">
            <FormattedMessage essage {...messages.title} />
          </h2>
          <p className="ca-description">
            <FormattedMessage {...messages.description} />
          </p>
          <ul className="ca-list">
            <li>
              <div className={Style.liFlex}>
                <svg className={Style.svg}>
                  <use xlinkHref={`${sprite}#check`}></use>
                </svg>
                <p>
                  <FormattedMessage {...messages.label1} />
                </p>
              </div>
            </li>
            <li content={Style.li}>
              <div className={Style.liFlex}>
                <svg className={Style.svg}>
                  <use xlinkHref={`${sprite}#check`}></use>
                </svg>
                <FormattedMessage {...messages.label2} />
              </div>
            </li>
            <li content={Style.li}>
              <div className={Style.liFlex}>
                <svg className={Style.svg}>
                  <use xlinkHref={`${sprite}#check`}></use>
                </svg>
                <FormattedMessage {...messages.label3} />
              </div>
            </li>
          </ul>
          <a className="ca-button">
            <span>
              <FormattedMessage {...messages.start} />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
