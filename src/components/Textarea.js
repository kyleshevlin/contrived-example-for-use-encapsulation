import React from 'react'
import { bs } from '../utils'
import Spacer from './Spacer'

export default function Textarea({ label, onChange, value }) {
  return (
    <label style={{ display: 'block' }}>
      <Spacer bottom={0.5}>{label}</Spacer>
      <textarea
        onChange={onChange}
        style={{
          display: 'block',
          fontSize: '1rem',
          height: bs(8),
          padding: bs(1),
          width: '100%',
        }}
        value={value}
      />
    </label>
  )
}
