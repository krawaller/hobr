import { RawUnit } from '@types';

const stormBoyz: RawUnit<'flyingRampage_stormboyz'> = {
  id: 'flyingRampage_stormboyz',
  name: 'Stormboyz',
  type: 'infantry',
  front: {
    type: 'healthy',
    move: 5,
    defence: 4,
    attack: {
      infantry: 1,
      light: 1,
      heavy: 0,
      range: 4,
      suppressive: true
    },
    specials: {
      large: true,
      flying: true,
      assault: 3
    }
  },
  back: {
    attack: {
      light: 0,
      heavy: 0
    },
    specials: {
      assault: 2
    }
  }
}

export default stormBoyz;
