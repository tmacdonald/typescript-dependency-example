import React, {Fragment, useState} from 'react'
import styles from './styles.module.css'
import scream from "@fuze/jscream"

interface ScreamProps {
  text: string
}

export const ScreamComponent = ({ text }: ScreamProps) => {
  const screamedText = scream(text)
  return <div className={styles.test}>{screamedText}</div>
}

export const CounterComponent = ({}) => {
  const [count, setCount] = useState(0);
  //const count = 0;
  // const setCount = (() => {}

  function increment(): void {
    setCount(count => count + 1);
  }

  return <Fragment>
    <span>{count}</span>
    <button onClick={increment}>+</button>
  </Fragment>
}