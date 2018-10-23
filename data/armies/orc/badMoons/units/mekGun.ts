import { RawUnit } from '@types';

const mekGun: RawUnit<'badMoons_mekGun'> = {
  id: 'badMoons_mekGun',
  name: 'Mek gun',
  front: {
    type: 'normal',
    move: 2,
    defence: 6,
    specials: {
      large: true,
      hawkEye: true,
    },
    attack: {
      arc: '90n',
      infantry: 3,
      light: 4,
      heavy: 3
    }
  },
  type: 'infantry'
};

export default mekGun;
