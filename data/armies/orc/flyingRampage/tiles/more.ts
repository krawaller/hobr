import { RawTile } from '@types';

const more: RawTile<'flyingRampage_more'> = {
  id: 'flyingRampage_more',
  name: 'Stormboyz',
  subTitle: 'More boyz',
  slots: [['orc_generic', 'orc_generic']],
  price: 100,
  source: 'orcReinforcements',
  provides: [{ id: 'flyingRampage_stormboyz', amount: 3 }],
  break: 3,
  specials: { order: 1 },
  connections: {
    left: { kind: 'orc_flyingRampage', gender: 'female' },
    right: { kind: 'orc_flyingRampage', gender: 'male' },
  },
  vp: 10
};

export default more;
