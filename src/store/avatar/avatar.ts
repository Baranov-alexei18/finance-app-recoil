import { selector } from 'recoil';

import client from '@/lib/apollo';
import { GET_ASSETS_BY_IDS } from '@/lib/graphQL/assets';

export const AVATAR_IDS = [
  'cm9zcuhsvlffr07lrmnm7531v',
  'cm9zcuht9lffw07lrrjvexvfz',
  'cm9zcuho7bpx507mwamx1vae5',
  'cm9zcuh2tlffh07lr243uwdvu',
  'cm9zcuh2rlfff07lrcyctpbf6',
  'cm9zcuhr1lffm07lrw45lujsd',
  'cm9zcuhmibpws07mwwpww2oe4',
  'cm9zcuhmqbpwv07mwilxulb3n',
  'cm9zcuhkubpwn07mwiklf2nkk',
  'cm9zcuho8bpx707mwz3s4bn7r',
];

export const avatarsSelector = selector({
  key: 'avatarsSelector',
  get: async () => {
    const { data } = await client.query({
      query: GET_ASSETS_BY_IDS,
      variables: { ids: AVATAR_IDS },
    });

    return data.assets;
  },
});
