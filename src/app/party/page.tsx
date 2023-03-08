'use client'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { EquipmentSelecter, JobSelecter } from '@/components'
import classes from './party.module.css'
import TextField from '@mui/material/TextField/TextField'
import { Button } from '@mui/material'

type MemberProps = {
  name: string
  job?: Job.Detail
  role?: number
}

const JobRule = [2, 2, 4]

const DEFAULT_PARTY = [
  { name: '' },
  // { name: '' },
  // { name: '' },
  // { name: '' },
  // { name: '' },
  // { name: '' },
  // { name: '' },
  // { name: '' },
]

const MemberSetting = ({
  member,
  index,
  setFunction,
}: // roles,
{
  member: MemberProps
  index: number
  setFunction: Function
  // roles: number[]
}) => {
  const { name } = member
  const [thisMember, setThisMember] = useState<MemberProps>(member)
  const thisName = useRef(null)
  const thisJob = useRef(null)
  const clickHandler = () => {
    const name = thisName.current
    const job = thisJob.current
    console.log(name)
    console.log(job)
  }

  useEffect(() => {}, [])

  return (
    <div>
      <span>
        {index + 1}:{name ? name : <TextField ref={thisName} variant='outlined' label='名前入力' />}
      </span>
      <JobSelecter ref={thisJob} />
      <Button variant='contained' onClick={clickHandler}>
        保存
      </Button>
    </div>
  )
}

export default () => {
  const [members, setMembers] = useState(DEFAULT_PARTY)

  useEffect(() => {}, [])

  return (
    <div className={classes.wrap}>
      {members.map((member, index) => (
        <MemberSetting key={index} member={member} index={index} setFunction={setMembers} />
      ))}
    </div>
  )
}
