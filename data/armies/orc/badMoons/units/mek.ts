import { RawUnit } from '@types';

const mek: RawUnit<'badMoons_mek'> = {
  id: 'badMoons_mek',
  name: 'Mek gun',
  type: 'infantry',
  front: {
    type: 'healthy',
    move: 4,
    defence: 6,
    attack: {
      infantry: 1,
      light: 1,
      heavy: 0,
      range: 4
    },
    specials: {
      order: 1,
      mekaniak: 3
    }
  }
}

export default mek;
