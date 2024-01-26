import MovingBubbleStyle from './MovingBubbleStyle.module.scss';
const MovingBubble = ({ customClass }) => (
  <span className={`${customClass} ${MovingBubbleStyle.shapeCommon}`}></span>
);
export default MovingBubble;
