import { useState, useEffect } from "react";

import { Notification } from "../../store/ui-slice";

import styles from './Notify.module.css';

const Notifify = ({ status, title, message }: Notification ): JSX.Element => {
  const [bgColor, setBgColor] = useState('cyan');
  const [isVisible, setIsVisible] = useState(false);

  const notifyDisplay: string = isVisible ? 'flex' : 'none';

  const highlightNotify = (): void => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    if (status === 'success') {
      setBgColor('cyan');
    } else if (status === 'pending') {
      setBgColor('blue');
    } else if (status === 'error') {
      console.log('error aaaa')
      setBgColor('red');
    }

    highlightNotify();
  }, [status, bgColor]);

  return (
    <div className={styles.Notify} style={{ backgroundColor: bgColor, display: notifyDisplay,}} >
      <div className={styles.Title}>{title}</div>
      <div className={styles.Message}>{message}</div>
    </div>
  );
};

export default Notifify;