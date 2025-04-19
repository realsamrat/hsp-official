import type { ReactNode } from "react"
import styles from "./headshots.module.css"

export default function HeadshotsLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div className={styles.container}>{children}</div>
}
