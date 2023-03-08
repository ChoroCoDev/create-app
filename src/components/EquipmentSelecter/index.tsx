import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { weaponNames, armourNames } from '@/params'
import styles from '@/components/JobSelecter/selecter.module.css'

const labelId = 'equipment-selecter-label'
const selecterId = 'equipment-selecter'

export const EquipmentSelecter = ({ tokenRank }: { tokenRank: number }) => {
  const list = tokenRank ? armourNames : weaponNames
  const label = tokenRank ? '装備選択' : '武器選択'
  return (
    <div>
      <FormControl className={styles.jobSelecter}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select labelId={labelId} id={selecterId}>
          {list.map((current, index) => (
            <MenuItem value={index} key={current}>
              {current}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
