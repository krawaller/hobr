import { RawTile } from '@types';

const main: RawTile = {
  id: 'teefBreakas_main',
  name: 'Teef breakas',
  subTitle: 'Goff boyz mob',
  recruit: true,
  slots: [
    ['orc_teefBreakas', 'orc_generic'],
    ['orc_generic', 'orc_teefBreakas'],
  ],
  price: 80,
  source: 'orcReinforcements',
  provides: [{ id: 'teefBreakas_shootas', amount: 4 }],
  break: 3,
  specials: {
    order: 1
  },
  connections: {
    left: { kind: 'orc_teefBreakas', gender: 'female' },
    right: { kind: 'orc_generic', gender: 'female' },
  },
  vp: 8
};

export default main;
