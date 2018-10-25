import { RawUnit } from '@types';

const bossMob: RawUnit<'teefBreakas_bigShoota'> = {
  id: 'teefBreakas_bigShoota',
  name: 'Big shoota',
  type: 'infantry',
  front: {
    type: 'healthy',
    move: 3,
    defence: 4,
    attack: {
      infantry: 3,
      light: 3,
      heavy: 'X',
      suppressive: true
    },
    specials: {
      assault: 0
    }
  },
  back: {
    attack: {
      light: 2
    }
  }
}

export default bossMob;
