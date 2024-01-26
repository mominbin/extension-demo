import { defineMessages } from 'react-intl';

const scope = 'demo.section.features';

export default defineMessages({
  header: {
    id: `${scope}.title`,
    defaultMessage: 'Efficient and Powerful, helps you enjoy coding',
  },
  card1Header: {
    id: `${scope}.card1.title`,
    defaultMessage: 'Code Generation',
  },
  card1Text: {
    id: `${scope}.card1.text`,
    defaultMessage:
      'generate code based on natural language description in comments or provide code suggestion.',
  },
  card2Header: {
    id: `${scope}.card2.title`,
    defaultMessage: 'Code Translation',
  },
  card2Text: {
    id: `${scope}.card2.text`,
    defaultMessage:
      'This plugin provides semantic-level translation of code and supports multiple programming languages.',
  },
  card3Header: {
    id: `${scope}.card3.title`,
    defaultMessage: 'Comment Generation',
  },
  card3Text: {
    id: `${scope}.card3.text`,
    defaultMessage:
      'This plugin can automatically add line-level comments to your code, saving a lot of development time.',
  },
  card4Header: {
    id: `${scope}.card4.title`,
    defaultMessage: 'More Features',
  },
  card4Text: {
    id: `${scope}.card4.text`,
    defaultMessage:
      'By using shortcuts and asking questions, you can access more features.',
  },
});
