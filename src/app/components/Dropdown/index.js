import dropdownStyles from '../../styles/dropdown.module.scss';
const Dropdown = (props) => (
  <li className={dropdownStyles.rootEl}>
    <a>{props.rootLabel}</a>
    <ul>
      {props.menu.items.map((item, index) => (
        <li key={index} onClick={() => props.menu.onClick(item.key)}>
          <a>{item.label}</a>
        </li>
      ))}
    </ul>
  </li>
);

export default Dropdown;
