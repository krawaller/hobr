import { RawTile } from '@types';

const main: RawTile<'flyingRampage_main'> = {
  id: 'flyingRampage_main',
  name: 'Flying Rampage',
  subTitle: 'Goff stormboys',
  recruit: true,
  slots: [
    ['orc_generic', 'orc_generic'],
    ['orc_generic', 'orc_generic'],
  ],
  price: 130,
  source: 'orcReinforcements',
  provides: [{ id: 'flyingRampage_stormboyz', amount: 4 }],
  break: 3,
  specials: {
    order: 1
  },
  connections: {
    left: { kind: 'orc_flyingRampage', gender: 'female' },
    right: { kind: 'orc_generic', gender: 'female' },
  },
  vp: 13
};

export default main;
