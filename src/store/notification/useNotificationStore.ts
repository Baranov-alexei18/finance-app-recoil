import { useRecoilState } from 'recoil';

import { notificationState, NotificationType } from './notificationStore';

export const useNotificationStore = () => {
  const [notification, setNotificationState] = useRecoilState(notificationState);

  const setNotification = (data: NotificationType) => setNotificationState(data);
  const removeNotification = () => setNotificationState(null);

  return {
    notification,
    setNotification,
    removeNotification,
  };
};
