import { RawUnit } from '@types';

const lootas: RawUnit<'badMoons_lootas'> = {
  id: 'badMoons_lootas',
  name: 'Lootas',
  type: 'infantry',
  front: {
    type: 'healthy',
    move: 3,
    defence: 5,
    attack: {
      infantry: 3,
      light: 3,
      heavy: 3,
      multiFire: 2
    },
  },
  back: {
    attack: {
      multiFire: null
    }
  }
};

export default lootas;
