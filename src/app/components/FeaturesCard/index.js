import { FormattedMessage } from 'react-intl';
import FeaturesCardStyles from './FeaturesCardStyle.module.scss';
const FeaturesCard = ({ cardHeader, cardText, cardIcon, theme }) => {
  const cardThemeMap = {
    Red: FeaturesCardStyles.redTheme,
    Green: FeaturesCardStyles.greenTheme,
    Yellow: FeaturesCardStyles.yellowTheme,
    Purple: FeaturesCardStyles.purpleTheme,
  };
  const themeClass = cardThemeMap[theme];
  return (
    <div className={`${FeaturesCardStyles.featuresCardBox} `}>
      <div className={`${FeaturesCardStyles.cardContainer} ${themeClass}`}>
        <div className={FeaturesCardStyles.card}>
          <div className={FeaturesCardStyles.cardIcon}>{cardIcon}</div>
          <div className={FeaturesCardStyles.cardHeader}>
            <FormattedMessage {...cardHeader} />
          </div>
          <p className={FeaturesCardStyles.cardText}>
            <FormattedMessage {...cardText} />
          </p>
        </div>
      </div>
    </div>
  );
};

const ThemeColor = {
  Red: 'Red',
  Green: 'Green',
  Yellow: 'Yellow',
  Purple: 'Purple',
};

export default FeaturesCard;
export { ThemeColor };
