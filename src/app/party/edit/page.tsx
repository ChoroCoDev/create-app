'use client'
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import { useForm, useFieldArray } from 'react-hook-form'
import { Jobs, Ranges, Roles } from '@/params'

import classes from './PartyEdit.module.css'
import { Add as AddIcon, DeleteOutlineOutlined } from '@mui/icons-material'

type Character = {
  name: string
  job: number | string
}

type Counter = 0 | 1 | 2
type RoleCount = {
  Tank: Counter
  Healer: Counter
  DPS: {
    Melee: Counter
    Ranged: Counter
    Magic: Counter
  }
}
type FormProps = {
  roleCount: RoleCount
  characters: Character[]
}

type PartyData = {
  characters: any[]
}

type JobSelecterProps = {
  role?: 0 | 1 | 2
  range?: 0 | 1 | 2
}

function getRoleCount(characters: Character[]) {
  const counter: RoleCount = {
    Tank: 0,
    Healer: 0,
    DPS: {
      Melee: 0,
      Ranged: 0,
      Magic: 0,
    },
  }

  characters.forEach(({ job }) => {
    job = job as number
    const thisJob = Jobs[job]
    const { appendage } = thisJob
    const { role, range } = appendage
    if (Roles[role] === 'DPS') {
      counter.DPS[Ranges[range]]++
      return
    }
    counter[Roles[role]]++
  })

  return counter
}

export default () => {
  // useForm 初期設定
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      characters: [
        {
          name: '',
          job: '',
        },
      ],
    },
    mode: 'onBlur',
  })

  // useFieldArray 初期設定
  const { fields, append, remove } = useFieldArray({ name: 'characters', control })

  // submit処理用の関数
  const onSubmit = (data: FormProps) => console.log(data)

  return (
    <Container className={classes.container}>
      <InputLabel>パーティメンバーを設定</InputLabel>
      {fields.map((field, index) => (
        <Stack className={classes.characterRow} key={field.id} spacing={2} direction='row'>
          <TextField label='キャラクター名' type='text' {...register(`characters.${index}.name`, { required: true })} />
          <FormControl {...register(`characters.${index}.job`)}>
            <InputLabel id='job-selecter-label'>ジョブ</InputLabel>
            <Select className={classes.selecter} labelId='job-selecter-label' label='ジョブ'>
              {Jobs.map(job => (
                <MenuItem value={job.id} key={job.id}>
                  {job.name.jp}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {index > 0 ? (
            <IconButton aria-label='行を削除' onClick={() => remove(index)}>
              <DeleteOutlineOutlined />
            </IconButton>
          ) : null}
        </Stack>
      ))}
      <Button
        onClick={() =>
          append({
            name: '',
            job: '',
          })
        }
        startIcon={<AddIcon />}>
        行を追加する
      </Button>
    </Container>
  )
}
