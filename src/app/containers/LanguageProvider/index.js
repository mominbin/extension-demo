import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

const LanguageProvider = (props) => {
  const locale = useSelector((state) => state.locale.locale);

  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={props.messages[locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
};
export default LanguageProvider;
