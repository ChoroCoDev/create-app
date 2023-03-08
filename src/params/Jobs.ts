export const Roles: ['Tank', 'Healer', 'DPS'] = ['Tank', 'Healer', 'DPS']
export const Ranges: ['Melee', 'Ranged', 'Magic'] = ['Melee', 'Ranged', 'Magic']

// なんて略すのがいいのか調べる。
// 付加情報？
export const Jobs: Job.Detail[] = [
  {
    id: 0,
    name: {
      jp: 'ナイト',
      en: 'Paladin',
    },
    abbreviate: {
      jp: 'ナ',
      en: 'PLD',
    },
    appendage: {
      role: 0,
      range: 0,
    },
  },
  {
    id: 1,
    name: {
      jp: '戦士',
      en: 'Warrior',
    },
    abbreviate: {
      jp: '戦',
      en: 'WAR',
    },
    appendage: {
      role: 0,
      range: 0,
    },
  },
  {
    id: 2,
    name: {
      jp: '暗黒騎士',
      en: 'Dark Knight',
    },
    abbreviate: {
      jp: '暗',
      en: 'DRK',
    },
    appendage: {
      role: 0,
      range: 0,
    },
  },
  {
    id: 3,
    name: {
      jp: 'ガンブレイカー',
      en: 'Gun Breaker',
    },
    abbreviate: {
      jp: 'ガ',
      en: 'GNB',
    },
    appendage: {
      role: 0,
      range: 0,
    },
  },
  {
    id: 4,
    name: {
      jp: '白魔導士',
      en: 'White Mage',
    },
    abbreviate: {
      jp: '白',
      en: 'WHM',
    },
    appendage: {
      role: 1,
      range: 2,
    },
  },
  {
    id: 5,
    name: {
      jp: '学者',
      en: 'Scholar',
    },
    abbreviate: {
      jp: '学',
      en: 'SCH',
    },
    appendage: {
      role: 1,
      range: 2,
    },
  },
  {
    id: 6,
    name: {
      jp: '占星術師',
      en: 'Astrologion',
    },
    abbreviate: {
      jp: '占',
      en: 'AST',
    },
    appendage: {
      role: 1,
      range: 2,
    },
  },
  {
    id: 7,
    name: {
      jp: '賢者',
      en: 'Sage',
    },
    abbreviate: {
      jp: '賢',
      en: 'SGE',
    },
    appendage: {
      role: 1,
      range: 2,
    },
  },
  {
    id: 8,
    name: {
      jp: 'モンク',
      en: 'Monk',
    },
    abbreviate: {
      jp: 'モ',
      en: 'MNK',
    },
    appendage: {
      role: 2,
      range: 0,
    },
  },
  {
    id: 9,
    name: {
      jp: '竜騎士',
      en: 'Dragoon',
    },
    abbreviate: {
      jp: '竜',
      en: 'DRG',
    },
    appendage: {
      role: 2,
      range: 0,
    },
  },
  {
    id: 10,
    name: {
      jp: '忍者',
      en: 'Ninja',
    },
    abbreviate: {
      jp: '忍',
      en: 'NIN',
    },
    appendage: {
      role: 2,
      range: 0,
    },
  },
  {
    id: 11,
    name: {
      jp: '侍',
      en: 'Samurai',
    },
    abbreviate: {
      jp: '侍',
      en: 'SAM',
    },
    appendage: {
      role: 2,
      range: 0,
    },
  },
  {
    id: 12,
    name: {
      jp: 'リーパー',
      en: 'Reaper',
    },
    abbreviate: {
      jp: 'リ',
      en: 'RPR',
    },
    appendage: {
      role: 2,
      range: 0,
    },
  },
  {
    id: 13,
    name: {
      jp: '吟遊詩人',
      en: 'Bard',
    },
    abbreviate: {
      jp: '詩',
      en: 'BRD',
    },
    appendage: {
      role: 2,
      range: 1,
    },
  },
  {
    id: 14,
    name: {
      jp: '機工士',
      en: 'Machinist',
    },
    abbreviate: {
      jp: '機',
      en: 'MCH',
    },
    appendage: {
      role: 2,
      range: 1,
    },
  },
  {
    id: 15,
    name: {
      jp: '踊り子',
      en: 'Dancer',
    },
    abbreviate: {
      jp: '踊',
      en: 'DNC',
    },
    appendage: {
      role: 2,
      range: 1,
    },
  },
  {
    id: 16,
    name: {
      jp: '黒魔導士',
      en: 'Black Mage',
    },
    abbreviate: {
      jp: '黒',
      en: 'BLM',
    },
    appendage: {
      role: 2,
      range: 2,
    },
  },
  {
    id: 17,
    name: {
      jp: '召喚士',
      en: 'Summoner',
    },
    abbreviate: {
      jp: '召',
      en: 'SMN',
    },
    appendage: {
      role: 2,
      range: 2,
    },
  },
  {
    id: 18,
    name: {
      jp: '赤魔導士',
      en: 'Red Mage',
    },
    abbreviate: {
      jp: '赤',
      en: 'RDM',
    },
    appendage: {
      role: 2,
      range: 2,
    },
  },
]
