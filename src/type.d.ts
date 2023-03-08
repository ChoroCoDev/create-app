declare namespace Job {
  type Role = 'Tank' | 'Healer' | 'DPS'
  type Range = 'Melee' | 'Ranged' | 'Magic'
  type Detail = {
    id: number
    name: {
      en: string
      jp: string
    }
    abbreviate: {
      en: string
      jp: string
    }
    appendage: {
      role: number
      range: number
    }
  }
}

declare type EquipmentDataObject = {
  name?: string
  IL: number
  before?: number
  useToken?: number
  useResources?: number
  isLayer?: number
  isFragment?: number
  visible?: boolean
}

declare type EquipmentsObject = {
  weapons: EquipmentData[]
  helms: EquipmentData[]
  armours: EquipmentData[]
  arms: EquipmentData[]
  leggings: EquipmentData[]
  shoes: EquipmentData[]
  earrings: EquipmentData[]
  necks: EquipmentData[]
  bangles: EquipmentData[]
  rings: EquipmentData[]
}

declare namespace LotRule {
  /**
   * トークン情報まとめ。
   * @max 経過週数 × 週制限 (450)
   * @used 使用トークン数
   * @now ( max - used )
   */
  type TokenData = {
    max: number
    used: number
    now: number
  }

  /**
   * @week 経過週数
   * @layer 各層のクリア状況
   */
  type ClearData = {
    week: number
    layer1: boolean
    layer2: boolean
    layer3: boolean
    layer4: boolean
  }
}

declare type MemberData = {
  name: string

  job: number

  equipment: MemberEquipmentData

  // トークン情報
  token: TokenData

  // 当週のクリア状況
  toWeek: ClearData

  // 過去のクリア状況
  weeks: ClearData[]

  record: {}
}

declare type MemberEquipmentData = {
  // 希望武器
  wishlist: []

  // 最終装備
  final: EquipMentData

  // 装備履歴
  history: EquipmentHistory
}

declare type EquipmentDatakeys = [
  'helms',
  'armours',
  'arms',
  'leggings',
  'shoes',
  'earrings',
  'necks',
  'rings1',
  'rings2',
]

declare type EquipMentData = {
  helms: number
  armours: number
  arms: number
  leggings: number
  shoes: number
  earrings: number
  necks: number
  bangles: number
  rings1: number
  rings2: number
}

declare type EquipmentHistory = {
  helms: number[]
  armours: number[]
  arms: number[]
  leggings: number[]
  shoes: number[]
  earrings: number[]
  necks: number[]
  bangles: number[]
  rings1: number[]
  rings2: number[]
}
