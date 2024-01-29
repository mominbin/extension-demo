import { FormattedMessage } from 'react-intl';
import exp1 from '../../mediums/imgs/exp1.gif';
import messages from './messages';

const CallToAction = () => (
  <section id="calltoaction" className="ca-section">
    <div className="container calltoaction">
      <img src={exp1} alt="" className="ca-image" />
      <div className="ca-description-container">
        <div className="ca-description-content">
          <i className="ca-icon" />
          <h2 className="ca-title">
            <FormattedMessage essage {...messages.title} />
          </h2>
          <p className="ca-description">
            <FormattedMessage {...messages.description} />
          </p>
          <ul className="ca-list">
            <li>
              <FormattedMessage {...messages.label1} />
            </li>
            <li>
              <FormattedMessage {...messages.label2} />
            </li>
            <li>
              <FormattedMessage {...messages.label3} />
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
