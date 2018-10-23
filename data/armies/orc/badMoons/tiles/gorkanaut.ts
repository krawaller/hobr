import { RawTile } from '@types';

const grorkh: RawTile<'badMoons_gorkanaut'> = {
  id: 'badMoons_gorkanaut',
  name: 'Gorkanaut',
  subTitle: 'Bad moons',
  connections: {
    left: { kind: 'orc_generic', gender: 'male' }
  },
  slots: [['orc_generic', 'orc_vehicle']],
  price: 130,
  specials: { vehicle: 'grey' },
  source: 'orcReinforcements',
  provides: [{id: 'badMoons_gorkanaut'}],
  vp: 13
}

export default grorkh;
