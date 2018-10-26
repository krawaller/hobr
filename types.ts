type RecursivePartial<T> = {
  [P in keyof T]?:
    T[P] extends (infer U)[] ? RecursivePartial<U>[] :
    T[P] extends object ? RecursivePartial<T[P]> :
    T[P];
};

export type OptionKind =
  | 'orc_command'
  | 'orc_flyingRampage'
  | 'orc_teefBreakas'
  | 'orc_vehicle' 
  | 'orc_generic'
;

export type Slot = [OptionKind, OptionKind];

export type RawOption<ID extends string = OptionId> = {
  id: ID
  kind: OptionKind
  vp?: Number
  price: Number,
  break?: Number
  provides?: Provision[]
}

export type OptionId =
  | 'badMoons_mekGun'
  | 'teefBreakas_trukk'
  | 'teefBreakas_bigShoota'
  ;

export type ArmyName = 'orc' | 'ultramarines';

export type FactionName = 
  | 'badMoons'
  | 'flyingRampage'
  | 'teefBreakas'

export type Source =
  | 'base'
  | 'orcReinforcements'
;

export type TileSpecials = {
  armour?: Number
  order?: Number
  vehicle?: 'red' | 'grey'
}

export type Provision = {
  id: UnitId
  amount?: Number
}

export type TileConnector = {
  kind: OptionKind
  gender: 'male' | 'female'
}

export type RawTile<ID extends string=TileId> = {
  id: ID
  name: string
  subTitle: string
  source: Source
  recruit?: boolean
  slots: Slot[]
  price: Number
  vp: Number
  provides: Provision[]
  specials: TileSpecials
  break?: Number
  connections: {
    left?: TileConnector
    right?: TileConnector
  }
};

export type TileId =
  | 'flyingRampage_more'
  | 'flyingRampage_main'
  | 'flyingRampage_boss'
  | 'badMoons_grorkh'
  | 'badMoons_battleWagon'
  | 'badMoons_lootas'
  | 'badMoons_gorkanaut'
  | 'teefBreakas_main'
  | 'teefBreakas_sluggas'
  ;

export type Wreck = {
  health: Number
  impassable?: UnitType
  blockLoS?: Boolean
  protection?: Number
}

export type UnitId =
  | 'badMoons_mek'
  | 'badMoons_mekGun'
  | 'badMoons_lootas'
  | 'badMoons_grorkh'
  | 'badMoons_battleWagon'
  | 'badMoons_gorkanaut'
  | 'flyingRampage_bossMob'
  | 'flyingRampage_stormboyz'
  | 'teefBreakas_bigShoota'
  | 'teefBreakas_rokkitLauncha'
  | 'teefBreakas_sluggas'
  | 'teefBreakas_shootas'
  | 'teefBreakas_trukk'
  ;

export type Arc =
  | '90n'

export type RegularAttack = {
  infantry: Number | 'X'
  light: Number | 'X'
  heavy: Number | 'X'
}

export type Template = 'H' | 'C';

export type TemplateAttack = {
  template: Template
}

export type Attack = {
  arc?: Arc
  piercing?: Boolean
  onTheMove?: Number
  range?: Number
  machineGun?: Boolean
  multiFire?: Number
  destruction?: Number
  suppressive?: Boolean
} & (RegularAttack | TemplateAttack)

export type UnitType = 'infantry' | 'light' | 'heavy';

export type UnitSpecials = {
  hawkEye?: Boolean
  large?: Boolean
  order?: Number
  mekaniak?: Number
  transport?: Number
  largeTransport?: Number
  flying?: Boolean
  assault?: Number
}

export type UnitSideType = 'healthy' | 'passive' | 'active' | 'normal' | 'wreck';

export type UnitSide = {
  type: UnitSideType,
  defence: Number
  attack: Attack
  secondary?: Attack
  specials?: UnitSpecials
  move: Number
}

export type RawUnit<ID extends string = UnitId> = {
  id: ID
  name: string
  type: UnitType
  front: UnitSide
  back?: RecursivePartial<UnitSide>
  wreck?: Wreck
}

export type TileCollection = {
  [key in TileId]?: RawTile<key>
}

export type OptionCollection = {
  [key in OptionId]?: RawOption<key>
}

export type UnitCollection = {
  [key in UnitId]?: RawUnit<key>
}

export type Faction = {
  tiles: RawTile[],
  options: RawOption[],
  units: RawUnit[]
};

export type Army = {
  [faction in FactionName]?: Faction
};

export type ArmyCollection = {
  [army in ArmyName]?: Army
};
