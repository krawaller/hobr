import { RawTile } from '@types';

const grorkh: RawTile<'badMoons_grorkh'> = {
  id: 'badMoons_grorkh',
  name: 'Grorkh',
  subTitle: 'Shock attack gun',
  connections: {
    left: {kind: 'orc_generic', gender: 'male'},
    right: {kind: 'orc_generic', gender: 'female'},
  },
  provides: [{id: 'badMoons_grorkh'}],
  slots: [['orc_command', 'orc_vehicle']],
  price: 50,
  source: 'orcReinforcements',
  specials: {},
  vp: 5
}

export default grorkh;
