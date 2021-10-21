import React from 'react'

export default function useCounter(initialState = 0) {
  const [state, setState] = React.useState(initialState)
  const handlers = React.useMemo(
    () => ({
      increment: () => {
        setState(s => s + 1)
      },
      decrement: () => {
        setState(s => s - 1)
      },
      reset: () => {
        setState(initialState)
      },
    }),
    [initialState]
  )

  return [state, handlers]
}
