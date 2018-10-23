import { RawTile } from '@types';

const battleWagon: RawTile<'badMoons_battleWagon'> = {
  id: 'badMoons_battleWagon',
  name: 'Battlewagon',
  subTitle: 'Bad moons',
  connections: {
    left: { kind: 'orc_generic', gender: 'male' }
  },
  slots: [['orc_generic', 'orc_vehicle']],
  price: 100,
  source: 'orcReinforcements',
  specials: {},
  provides: [{id: 'badMoons_battleWagon'}],
  vp: 10
};

export default battleWagon;
