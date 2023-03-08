'use client'
import { Button } from '@mui/material'
import Link from 'next/link'
import styles from './layout.module.css'
import HomeIcon from '@mui/icons-material/Home'
import GroupsIcon from '@mui/icons-material/Groups'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: <HomeIcon /> },
  { href: '/party', label: 'Party', icon: <GroupsIcon /> },
  { href: '/mypage', label: 'MyPage', icon: <AccountCircleIcon /> },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <h1 className={styles.header}>Create FF14 App Now</h1>
        <div className={styles.container}>
          {NAV_ITEMS.map(item => (
            <Button variant='outlined' color='primary' startIcon={item.icon}>
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
        <hr />
        <br />
        {children}
        <br />
        <hr />
        <h3 className={styles.header}>footer...</h3>
      </body>
    </html>
  )
}
