import React from 'react'

const BUTTON_STYLES_BY_VARIANT = {
  primary: {
    default: {
      backgroundColor: 'tomato',
      color: 'white',
    },
    disabled: {
      backgroundColor: 'darkGray',
      color: 'black',
    },
  },
  secondary: {
    default: {
      backgroundColor: '#eee',
      color: 'black',
    },
  },
}

export default function Button({
  children,
  disabled = false,
  onClick,
  type = 'button',
  variant = 'primary',
}) {
  const state = disabled ? 'disabled' : 'default'

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={{
        ...BUTTON_STYLES_BY_VARIANT[variant][state],
        cursor: disabled ? 'default' : 'pointer',
        fontSize: 'inherit',
        border: 'none',
        borderRadius: 4,
        padding: '.5rem 1.5rem',
        transition: 'all .2s ease',
      }}
    >
      {children}
    </button>
  )
}
