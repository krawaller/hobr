import { RawUnit } from '@types';

const bossMob: RawUnit = {
  id: 'flyingRampage_bossMob',
  name: 'bossMob',
  type: 'infantry',
  front: {
    type: 'healthy',
    move: 5,
    defence: 6,
    attack: {
      infantry: 2,
      light: 1,
      heavy: 0,
      range: 4,
      suppressive: true
    },
    specials: {
      order: 1,
      large: true,
      flying: true,
      assault: 2
    }
  }
}

export default bossMob;
