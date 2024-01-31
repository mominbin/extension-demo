import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import AccrodionCard from '../../components/AccrodionCard';
import messages from './messages';
import Style from './style.module.scss';
import commonMessage from '../common.messages';

const Faq = () => {
  const [activeStates, setActiveStates] = useState([false, false, false]);
  const messagesList = [
    {
      title: messages.title1,
      content: messages.content1,
    },
    {
      title: messages.title2,
      content: messages.content2,
    },
    {
      title: messages.title3,
      content: messages.content3,
    },
  ];
  const handleStateChange = (index) => {
    window.console.log(index);
    const newActiveStates = new Array(activeStates.length).fill(false);
    newActiveStates[index] = !activeStates[index];
    setActiveStates(newActiveStates);
  };

  return (
    <section id="faq">
      <div className={Style.faqHeaderContainer}>
        <div className={Style.faqHeader}>
          <h4 className={Style.faqHeaderContent}>
            <FormattedMessage {...commonMessage.FaqHeader} />
          </h4>
        </div>
      </div>
      <div className={Style.faqContainer}>
        {activeStates.map((item, index) => (
          <AccrodionCard
            key={index}
            currentState={item}
            index={index}
            title={messagesList[index].title}
            content={messagesList[index].content}
            onStateChange={handleStateChange}
          />
        ))}
      </div>
    </section>
  );
};
export default Faq;
