import { atom } from 'recoil';

export type NotificationType = {
  type: string;
  message: string;
  description: string;
};

export const notificationState = atom<NotificationType | null>({
  key: 'notificationState',
  default: null,
});
