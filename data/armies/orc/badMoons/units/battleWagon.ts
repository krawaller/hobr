import { RawUnit } from '@types';

const battleWagon: RawUnit<'badMoons_battleWagon'> = {
  id: 'badMoons_battleWagon',
  name: 'Battlewagon',
  type: 'heavy',
  front: {
    type: 'normal',
    move: 4,
    defence: 8,
    specials: {
      largeTransport: 6
    },
    attack: {
      infantry: 3,
      light: 3,
      heavy: 0,
      onTheMove: -2,
      machineGun: true,
      multiFire: 2,
      suppressive: true
    },
    secondary: {
      infantry: 3,
      light: 4,
      heavy: 4,
      piercing: true,
      destruction: 2
    }
  }
};

export default battleWagon;
