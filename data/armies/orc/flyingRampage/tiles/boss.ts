import { RawTile } from '@types';

const boss: RawTile<'flyingRampage_boss'> = {
  id: 'flyingRampage_boss',
  name: 'Boss mob',
  subTitle: 'Da boss',
  source: 'orcReinforcements',
  price: 50,
  provides: [{id: 'flyingRampage_boss'}],
  slots: [['orc_command', 'orc_generic']],
  specials: { armour: 5 },
  connections: { right: { kind: 'orc_flyingRampage', gender: 'male' }, },
  vp: 5
};

export default boss;
