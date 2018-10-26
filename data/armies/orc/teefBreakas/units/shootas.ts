import { RawUnit } from '@types';

const shootas: RawUnit = {
  id: 'teefBreakas_shootas',
  name: 'Shootas',
  type: 'infantry',
  front: {
    type: 'healthy',
    move: 3,
    defence: 4,
    attack: {
      infantry: 1,
      light: 1,
      heavy: 'X'
    },
    specials: {
      assault: 2
    }
  },
  back: {
    attack: {
      light: 0
    },
    specials: {
      assault: 1
    }
  }
}

export default shootas;
