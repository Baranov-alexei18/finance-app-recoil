import { atom } from 'recoil';

import { UserType } from '@/types/user';

export const userState = atom<UserType | null>({
  key: 'userState',
  default: null,
});

export const userLoadingState = atom<boolean>({
  key: 'userLoadingAtom',
  default: false,
});

export const userErrorState = atom<Error | null>({
  key: 'userErrorAtom',
  default: null,
});
