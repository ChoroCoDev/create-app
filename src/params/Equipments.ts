const useTokens = [500, 375, 495, 825]
const weaponLevels = [610, 615, 620, 620, 630, 635]
const armourLevels = [610, 610, 620, 620, 630, 630]
export const weaponNames = ['新式', '極蛮神', 'トークン', '新式強化', 'トークン強化', 'レイド']
export const armourNames = ['新式', 'Ｎレイド', 'トークン', '新式強化', 'トークン強化', 'レイド']

const getEquipments = (tokenRank: 0 | 1 | 2 | 3): EquipmentDataObject[] => {
  const isWeapon = !tokenRank
  const levels = isWeapon ? weaponLevels : armourLevels
  return levels.map((IL, index) => {
    const result: EquipmentDataObject = { IL: IL, name: isWeapon ? weaponNames[index] : armourNames[index] }
    const { name } = result
    switch (name) {
      case 'トークン':
        return { ...result, useToken: useTokens[tokenRank] }
      case 'トークン強化':
        return { ...result, useToken: useTokens[tokenRank], useResources: 1, before: 2 }
      case 'レイド':
        return { ...result, isLayer: 4, isFragment: 8 }
      default:
        return result
    }
  })
}

/**
 * 必要な装備データを取得する
 */
export const Equipments: EquipmentsObject = {
  weapons: getEquipments(0),
  helms: getEquipments(1),
  armours: getEquipments(2),
  arms: getEquipments(1),
  leggings: getEquipments(2),
  shoes: getEquipments(1),
  earrings: getEquipments(3),
  necks: getEquipments(3),
  bangles: getEquipments(3),
  rings: getEquipments(3),
}
