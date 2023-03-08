import { DateTime } from 'luxon'
const EquipmentKeys: EquipmentDatakeys = [
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

/**
 * トークンを最大どれくらい取得できたかを返す。
 * パーティごとの攻略週数を引数に指定すれば
 * その週に合わせた最大取得数を返す。
 * @returns number
 */
export const maxToken = (week?: number): number => {
  if (week) return Math.round(week) * 450
  // レイドの開始日を設定。
  const startDay = DateTime.local(2022, 8, 30, 19)

  /**
   * startDayと当日で日付を比較。
   * 何週経過しているかを算出
   */
  const diff = startDay.diffNow('weeks')

  // diff から 何週部分を抜き出す
  const { weeks } = diff

  /**
   * weeksを正の整数に直して、
   * 1週間に取得出来るトークンの最大数を乗算して返す
   */
  return Math.round(weeks * -1) * 450
}

class Member {
  private name: string
  private job: number
  private equipment: MemberEquipmentData
  token?: LotRule.TokenData
  toWeek?: LotRule.ClearData
  weeks?: LotRule.ClearData[]

  constructor(name: string, job: number, equipment: MemberEquipmentData) {
    this.name = name
    this.job = job
    this.equipment = equipment
  }
  private changeName(newName: string) {
    this.name = newName
    return this
  }
  updateEquipment(eq: EquipMentData) {
    const equipment = { ...this.equipment }
    const { history } = equipment

    for (let key of EquipmentKeys) {
      history[key] = [...history[key], eq[key]]
    }
    return this
  }
}
