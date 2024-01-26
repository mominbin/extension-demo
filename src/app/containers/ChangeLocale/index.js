import { useDispatch } from 'react-redux';
import { changeLocale } from '../../localeSlice';
import Dropdown from '../../components/Dropdown';

const items = [
  {
    label: '简体中文',
    key: 'zh',
  },
  {
    label: 'English',
    key: 'en',
  },
];
const ChangeLocale = () => {
  const dispatch = useDispatch();
  const rootLabel = '简 | English';
  const onClick = (key) => {
    dispatch(changeLocale(key));
  };
  return <Dropdown rootLabel={rootLabel} menu={{ items, onClick }}></Dropdown>;
};
export default ChangeLocale;
