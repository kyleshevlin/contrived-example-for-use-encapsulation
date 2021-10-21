import React from 'react'

export default function useInput() {
  const [value, setValue] = React.useState('')
  const handlers = React.useMemo(
    () => ({
      update: val => {
        setValue(val)
      },
      reset: () => {
        setValue('')
      },
    }),
    []
  )

  return [value, handlers]
}
