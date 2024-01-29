import Style from './Style.module.scss';
const Footer = () => {
  window.console.log('Footer component loaded');
  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <div className={Style.left}> 公网安备 xxxxxxxxxxxxx号</div>
        <div className={Style.right}></div>
      </div>
    </footer>
  );
};

export default Footer;
