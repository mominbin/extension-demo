import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
// 导入你的Navbar组件

Enzyme.configure({ adapter: new Adapter() });
const class1 = 'class1';
const class2 = 'class2';
const handleScroll = (navClassName, scrollTop) => {
  const setNavClassName = (classArray) => {
    // eslint-disable-next-line no-param-reassign
    navClassName = classArray;
  };
  if (scrollTop > 100) {
    if (!navClassName.includes(class1)) {
      setNavClassName([...navClassName, class1]);
    }
  } else {
    setNavClassName(navClassName.filter((c) => c !== class1));
  }
  if (scrollTop > 300) {
    if (!navClassName.includes(class2)) {
      setNavClassName([...navClassName, class2]);
    }
  } else {
    setNavClassName(navClassName.filter((c) => c !== class2));
  }
  return navClassName;
};

describe('Navbar', () => {
  it('tests handleScroll function', () => {
    let navClassName = [];
    let scrollTop = 10;
    navClassName = handleScroll(navClassName, scrollTop);
    expect(navClassName).toEqual([]);
    scrollTop = 101;
    navClassName = handleScroll(navClassName, scrollTop);
    expect(navClassName).toEqual([class1]);
    scrollTop = 400;
    navClassName = handleScroll(navClassName, scrollTop);
    expect(navClassName).toEqual([class1, class2]);
  });
});
