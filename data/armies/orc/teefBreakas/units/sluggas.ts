import { RawUnit } from '@types';

const sluggas: RawUnit = {
  id: 'teefBreakas_sluggas',
  name: 'Sluggas',
  type: 'infantry',
  front: {
    type: 'healthy',
    move: 3,
    defence: 4,
    attack: {
      infantry: 1,
      light: 1,
      heavy: 'X',
      range: 4,
      suppressive: true
    },
    specials: {
      assault: 3
    }
  },
  back: {
    attack: {
      light: 0
    },
    specials: {
      assault: 2
    }
  }
}

export default sluggas;
