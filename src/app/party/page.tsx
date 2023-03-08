import React from 'react'
import { Button, Stack } from '@mui/material'
import Link from 'next/link'

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

export default () => {
  return (
    <div>
      <Link href={'/party/edit'}>パーティ編集</Link>
    </div>
  )
}
