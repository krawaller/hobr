import { RawTile } from '@types';

const sluggas: RawTile = {
  id: 'teefBreakas_sluggas',
  name: 'Sluggas',
  subTitle: 'More boyz',
  slots: [
    ['orc_generic', 'orc_teefBreakas'],
  ],
  price: 65,
  source: 'orcReinforcements',
  provides: [{ id: 'teefBreakas_sluggas', amount: 3 }],
  break: 2,
  specials: {
    order: 1
  },
  connections: {
    left: { kind: 'orc_teefBreakas', gender: 'female' },
    right: { kind: 'orc_teefBreakas', gender: 'male' },
  },
  vp: 6
};

export default sluggas;
