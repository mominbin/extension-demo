import { FormattedMessage } from 'react-intl';
import GradientStyle from './GradientBorderButton.module.scss';
const GradientBorderButton = ({ formattedMessage, onClick }) => (
  <a className={GradientStyle.buttonThm} onClick={() => onClick}>
    <span>
      <FormattedMessage {...formattedMessage}></FormattedMessage>
    </span>
  </a>
);

export default GradientBorderButton;
