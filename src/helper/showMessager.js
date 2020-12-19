
import { notification } from 'antd';
import './showMessager.scss';
const ShowMessager = (isCheck, msg) => {
  const close = () => {};
  const key = `open${Date.now()}`;
  const type = isCheck ? 'success' : 'error';
 
  notification.open({
    className: 'customNotica',
    type,
    message: msg,
    onClose: close,
    key,
    duration: 1.5,
  });
};
export default ShowMessager;