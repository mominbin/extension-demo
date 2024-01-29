import { FormattedMessage } from 'react-intl';
import Style from './style.module.scss';
const Card = ({ index, currentState, title, content, onStateChange }) => {
  // const [active, setActive] = React.useState(false);
  const handleClick = () => {
    onStateChange(index);
  };
  return (
    <div className={Style.card}>
      <div
        className={`${Style.cardContainer} fadeInUp ${
          currentState ? Style.active : ''
        }`}
      >
        <div className={Style.accrodionInner}>
          <div onClick={() => handleClick()} className={Style.title}>
            <h4>
              <FormattedMessage {...title} />
            </h4>
          </div>
          <div className={Style.content}>
            <p>
              <FormattedMessage {...content} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
