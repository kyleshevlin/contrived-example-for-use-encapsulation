import React from 'react'
import ContrivedExample from './features/ContrivedExample'
import Spacer from './components/Spacer'

export default function App() {
  return (
    <div
      style={{
        maxWidth: 1024,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      <Spacer vert={2}>
        <ContrivedExample />
      </Spacer>
    </div>
  )
}
