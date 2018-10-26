import { RawUnit } from '@types';

const trukk: RawUnit = {
  id: 'teefBreakas_trukk',
  name: 'trukk',
  type: 'light',
  front: {
    type: 'normal',
    move: 6,
    defence: 8,
    attack: {
      infantry: 3,
      light: 3,
      heavy: 'X',
      suppressive: true,
      onTheMove: -2
    },
    specials: {
      transport: 8
    }
  },
  wreck: {
    health: 2,
    impassable: 'light',
    protection: 1,
    blockLoS: true
  }
}

export default trukk;
