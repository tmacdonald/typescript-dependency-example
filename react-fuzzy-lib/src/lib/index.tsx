import { useState } from "react"

interface CounterComponentProps {
  initialCounter?: number,
  incrementAmount?: number
}

export function CounterComponent({ initialCounter = 0, incrementAmount = 1 }: CounterComponentProps) {
  const [counter, setCounter] = useState<number>(initialCounter);

  function increment() {
    setCounter(counter => counter + incrementAmount)
  }

  return (
    <>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </>
  )
}