import * as React from 'react'
import styles from './styles.module.css'
import scream from "@fuze/jscream"

interface Props {
  text: string
}

export const ScreamComponent = ({ text }: Props) => {
  const screamedText = scream(text)
  return <div className={styles.test}>{screamedText}</div>
}
