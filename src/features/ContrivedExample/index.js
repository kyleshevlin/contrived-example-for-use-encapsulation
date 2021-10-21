import React from 'react'
import Button from '../../components/Button'
import Flex from '../../components/Flex'
import Spacer from '../../components/Spacer'
import Textarea from '../../components/Textarea'
import useCounter from '../../hooks/useCounter'
import useInput from '../../hooks/useInput'
import useToggle from '../../hooks/useToggle'
import { inflect, bs } from '../../utils'
import HackDisplay from './HackDisplay'

const INITIAL_COUNT = 5

export default function ContrivedExample() {
  const [isOpen, { on: open, off: close }] = useToggle()
  const [value, { update: updateValue, reset: resetValue }] = useInput()
  const [countdown, { decrement: decrementCountdown, reset: resetCountdown }] =
    useCounter(INITIAL_COUNT)
  const { handleChange, handleReset } = useActions({
    close,
    resetValue,
    updateValue,
  })

  useManageTimer({ decrementCountdown, isOpen, resetCountdown })
  useManageDisplay({
    close,
    countdown,
    resetCountdown,
    resetValue,
  })

  return (
    <div>
      <div>
        <Spacer bottom={1}>
          <h2>HTML Encoder</h2>
        </Spacer>
        <Textarea
          label="Encode your HTML"
          onChange={handleChange}
          value={value}
        />

        <Spacer top={1}>
          <Flex justifyContent="flex-end" gap={bs()}>
            <Button onClick={handleReset} variant="secondary">
              Reset
            </Button>
            <Button disabled={!value} onClick={open}>
              Hack
            </Button>
          </Flex>
        </Spacer>
      </div>

      {isOpen && (
        <Spacer top={1}>
          <div
            style={{
              borderTop: '2px solid #ddd',
              paddingTop: '1rem',
            }}
          >
            <Spacer bottom={1}>
              <h3>HTML Decoded</h3>
            </Spacer>

            <p>
              You have {countdown} {inflect('second')(countdown)} to read this
              decoded message before it&apos;s gone <strong>forever</strong>.
            </p>

            <HackDisplay value={value} />

            <Spacer top={1}>
              <Flex justifyContent="flex-end">
                <Button onClick={close}>Hide</Button>
              </Flex>
            </Spacer>
          </div>
        </Spacer>
      )}
    </div>
  )
}

function useActions({ close, resetValue, updateValue }) {
  const actions = React.useMemo(
    () => ({
      handleChange: e => {
        close()
        updateValue(e.target.value)
      },
      handleReset: () => {
        close()
        resetValue()
      },
    }),
    [close, resetValue, updateValue]
  )

  return actions
}

function useManageTimer({ decrementCountdown, isOpen, resetCountdown }) {
  React.useEffect(() => {
    if (!isOpen) {
      resetCountdown()
      return
    }

    const id = setInterval(decrementCountdown, 1000)
    return () => clearInterval(id)
  }, [decrementCountdown, isOpen, resetCountdown])
}

function useManageDisplay({ close, countdown, resetCountdown, resetValue }) {
  React.useEffect(() => {
    if (countdown === 0) {
      close()
      resetCountdown()
      resetValue()
    }
  }, [close, countdown, resetCountdown, resetValue])
}
