import { RawTile } from '@types';

const grorkh: RawTile<'badMoons_lootas'> = {
  id: 'badMoons_lootas',
  name: 'Lootas',
  subTitle: 'Bad moons',
  price: 205,
  break: 2,
  connections: {
    left: {kind: 'orc_generic', gender: 'male'},
    right: {kind: 'orc_generic', gender: 'female'}
  },
  provides: [{id: 'badMoons_lootas', amount: 2}, {id: 'badMoons_mek'}],
  slots: [['orc_generic', 'orc_generic']],
  source: 'orcReinforcements',
  specials: {},
  vp: 10
}

export default grorkh;
