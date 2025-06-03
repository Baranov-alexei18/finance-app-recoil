import dayjs, { Dayjs } from 'dayjs';
import { atom } from 'recoil';

import { GRANULARITY } from '@/constants/granularity';

export const TypeGranularityState = atom<keyof typeof GRANULARITY>({
  key: 'TypeGranularityAtom',
  default: 'month',
});

export const PeriodGranularityState = atom<Dayjs | null>({
  key: 'PeriodGranularityAtom',
  default: dayjs(),
});
