import React from 'react'
import Button from '../../components/Button'
import Flex from '../../components/Flex'
import Spacer from '../../components/Spacer'
import Textarea from '../../components/Textarea'
import { inflect, bs } from '../../utils'
import HackDisplay from './HackDisplay'

const INITIAL_COUNT = 5

export default function ContrivedExample() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [countdown, setCountdown] = React.useState(INITIAL_COUNT)

  const open = React.useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleChange = React.useCallback(
    e => {
      close()
      setValue(e.target.value)
    },
    [close]
  )

  const resetValue = React.useCallback(() => {
    close()
    setValue('')
  }, [close])

  const decrementCount = React.useCallback(() => {
    setCountdown(s => s - 1)
  }, [])

  const resetCountdown = React.useCallback(() => {
    setCountdown(INITIAL_COUNT)
  }, [])

  React.useEffect(() => {
    if (!isOpen) {
      resetCountdown()
      return
    }

    const id = setInterval(decrementCount, 1000)
    return () => clearInterval(id)
  }, [decrementCount, isOpen, resetCountdown])

  React.useEffect(() => {
    if (countdown === 0) {
      close()
      resetCountdown()
      resetValue()
    }
  }, [close, countdown, resetCountdown, resetValue])

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
            <Button onClick={resetValue} variant="secondary">
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
          <div style={{ borderTop: '2px solid #ddd', paddingTop: '1rem' }}>
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
