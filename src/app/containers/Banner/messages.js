import { defineMessages } from 'react-intl';

const scope = 'demo.section.banner';

export default defineMessages({
  buttonText: {
    id: `${scope}.buttonText`,
    defaultMessage: 'Get Started',
  },
  header1: {
    id: `${scope}.header1`,
    defaultMessage: 'We Deliver the',
  },
  header2: {
    id: `${scope}.header2`,
    defaultMessage: 'Code assistant',
  },
  header3: {
    id: `${scope}.header3`,
    defaultMessage: 'you Need.',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'This plugin is a GPT powered automatic code generation and completion tool, which supports multiple languages: Python, Javascript, Typescript, Java, etc.',
  },
});
