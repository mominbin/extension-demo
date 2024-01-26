import { FormattedMessage } from 'react-intl';
import { useEffect, useState } from 'react';
import navbarStyle from '../../styles/navbar.module.scss';
import messages from './messages';
import Logo from '../../components/Logo';
import ChangeLocale from '../ChangeLocale';

const Navbar = () => {
  const listItem = [
    'home',
    'features',
    'calltoaction',
    'screenshots',
    'download',
  ];

  const [navbar, siteMenu, strickenMenu, stickyFixed] = [
    navbarStyle.navbar,
    navbarStyle.siteMenu,
    navbarStyle.strickedMenu,
    navbarStyle.strickyFixed,
  ];
  const [navClassName, setNavClassName] = useState([navbar, siteMenu]);
  const [, setScrollPosition] = useState(0);
  const handleScroll = () => {
    let tempClass = [];
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(scrollTop);
    if (scrollTop <= 60) {
      tempClass = [navbar, siteMenu];
    }
    if (scrollTop > 60 && scrollTop < 100) {
      tempClass = [navbar, siteMenu, strickenMenu];
    }
    if (scrollTop >= 100) {
      tempClass = [navbar, siteMenu, strickenMenu, stickyFixed];
    }
    if (tempClass !== navClassName) {
      setNavClassName(tempClass);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={navbarStyle.siteHeader}>
        <nav className={navClassName.join(' ')}>
          <div className={navbarStyle.navContainer}>
            <div className={navbarStyle.mainNav}>
              <ul className={navbarStyle.navUL}>
                <li className={navbarStyle.homeItem}>
                  <a>
                    <Logo />
                  </a>
                </li>
                <ChangeLocale></ChangeLocale>
                {listItem.map((item, index) => (
                  <li key={index}>
                    <a href={`#${item}`}>
                      <FormattedMessage {...messages[item]} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
