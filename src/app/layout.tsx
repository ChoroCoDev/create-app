import Link from 'next/link'
import styles from './layout.module.css'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/party', label: 'Party' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <h1 className={styles.header}>Create FF14 App Now</h1>
        <div className={styles.container}>
          {NAV_ITEMS.map(item => (
            <Link href={item.href} key={item.href} className={styles.linkButton}>
              ➡{item.label}
            </Link>
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
