import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { MutableRefObject } from 'react'
import { Jobs } from '@/params'
import styles from './selecter.module.css'

const label = 'ジョブを選択してください。'
const labelId = 'job-selecter-label'
const selecterId = 'job-selecter'

declare type JobSelecterProps = {
  role?: 0 | 1 | 2
  range?: 0 | 1 | 2
  setFunction?: Function
  ref?: MutableRefObject<null>
}

const getJobList = ({ role, range }: JobSelecterProps) => {
  if (range != undefined) return Jobs.filter(job => job.appendage.range === range && job.appendage.role === 2)
  if (role != undefined) return Jobs.filter(job => job.appendage.role === role)
  return Jobs
}

export const JobSelecter = (props: JobSelecterProps) => {
  const { setFunction, ref } = props
  const changeHandler = (e: SelectChangeEvent) => {
    if (!setFunction) return
    const index = Number(e.target.value)
    setFunction(Jobs[index])
  }
  const joblist = getJobList(props)
  return (
    <FormControl className={styles.jobSelecter}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select labelId={labelId} id={selecterId} ref={ref}>
        {joblist.map(job => (
          <MenuItem value={job.id} key={job.id}>
            {job.name.jp}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
