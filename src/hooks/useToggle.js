import React from 'react'

export default function useToggle() {
  const [state, setState] = React.useState(false)
  const handlers = React.useMemo(
    () => ({
      on: () => {
        setState(true)
      },
      off: () => {
        setState(false)
      },
      toggle: () => {
        setState(s => !s)
      },
    }),
    []
  )

  return [state, handlers]
}
