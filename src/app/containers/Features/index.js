import { FormattedMessage } from 'react-intl';
import messages from './messages';
// eslint-disable-next-line import/no-named-as-default-member
import FeaturesCard, { ThemeColor } from '../../components/FeaturesCard';

const Features = () => {
  const cards = [
    {
      header: messages.card1Header,
      text: messages.card1Text,
      theme: ThemeColor.Red,
      icon: 'coffee',
    },
    {
      header: messages.card2Header,
      text: messages.card2Text,
      theme: ThemeColor.Green,
      icon: 'database',
    },
    {
      header: messages.card3Header,
      text: messages.card3Text,
      theme: ThemeColor.Yellow,
      icon: 'cpu',
    },
    {
      header: messages.card4Header,
      text: messages.card4Text,
      theme: ThemeColor.Purple,
      icon: 'feather',
    },
  ];
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header text-center">
          <h2 className="features-header-label">
            <span>
              <FormattedMessage {...messages.header} />
            </span>
            <br />
          </h2>
        </div>
        <div className="features-content">
          {cards.map((card, index) => (
            <FeaturesCard
              key={index}
              cardHeader={card.header}
              cardText={card.text}
              theme={card.theme}
              cardIcon={card.icon}
            ></FeaturesCard>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
