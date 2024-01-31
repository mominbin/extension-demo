import { FormattedMessage } from 'react-intl';
import Style from './style.module.scss';
import sprite from '../../mediums/imgs/sprite.svg';

const Card = ({ index, currentState, title, content, onStateChange }) => {
  const handleClick = () => {
    onStateChange(index);
  };
  return (
    <div>
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
            <svg className={Style.icon}>
              <use
                xlinkHref={currentState ? `${sprite}#minus` : `${sprite}#plus`}
              ></use>
            </svg>
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
