import React from 'react'

export default function Flex({
  children,
  crossAxis: alignItems,
  direction: flexDirection,
  gap,
  mainAxis: justifyContent,
}) {
  return (
    <div
      style={{
        alignItems,
        display: 'flex',
        flexDirection,
        gap,
        justifyContent,
      }}
    >
      {children}
    </div>
  )
}
