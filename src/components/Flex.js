import React from 'react'

export default function Flex({
  alignItems,
  children,
  direction: flexDirection,
  gap,
  justifyContent,
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
