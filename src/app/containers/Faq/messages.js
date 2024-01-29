import { defineMessages } from 'react-intl';

const scope = 'demo.section.faq';

export default defineMessages({
  title1: {
    id: `${scope}.title1`,
    defaultMessage: 'What is Fitten code',
  },
  content1: {
    id: `${scope}.content1`,
    defaultMessage:
      'Fitten Code is a GPT powered Code Generation and completion tool, which supports multiple languages: Python, Javascript, Typescript, Java, etc.',
  },
  title2: {
    id: `${scope}.title2`,
    defaultMessage: 'Which programming languages does Fitten code support?',
  },
  content2: {
    id: `${scope}.content2`,
    defaultMessage:
      'Fitten code supports dozens of common programming languages, including Python, Java, C++, JavaScript, Go, etc.',
  },
  title3: {
    id: `${scope}.title3`,
    defaultMessage: 'Is Fitten code free?',
  },
  content3: {
    id: `${scope}.content3`,
    defaultMessage:
      'The Fitten code plugin is completely free for individual users.',
  },
});
