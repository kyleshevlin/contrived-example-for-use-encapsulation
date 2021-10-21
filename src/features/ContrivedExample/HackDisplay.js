import React from 'react'
import { bs } from '../../utils'

export default function HackDisplay({ value }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: value }}
      style={{
        backgroundColor: '#000',
        color: '#00ff00',
        fontFamily: 'monospace',
        fontSize: '1rem',
        padding: bs(),
      }}
    />
  )
}
