import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import { App } from '../App'
import {
  BANK_NAMES,
  BUTTON_NAMES,
  PAD_LABELS,
  SCREEN_LABELS,
} from '../constants/names'

describe('Drum machine app', () => {
  it('Matches DOM tree snapshot', () => {
    const domTree = renderer.create(<App />).toJSON()
    expect(domTree).toMatchSnapshot()
  })

  it('should render the display', () => {
    render(<App />)
  })
})

describe('display', () => {
  it('should update when one of the bank buttons is clicked', async () => {
    render(<App />)
    const display = screen.getByTestId('display')
    const bank1Btn = screen.getByRole('button', { name: BUTTON_NAMES.BANK1 })
    const bank2Btn = screen.getByRole('button', { name: BUTTON_NAMES.BANK2 })
    const bank3Btn = screen.getByRole('button', { name: BUTTON_NAMES.BANK3 })

    expect(display).toHaveTextContent(BANK_NAMES.BANK1)
    await userEvent.click(bank2Btn)
    expect(display).toHaveTextContent(BANK_NAMES.BANK2)
    await userEvent.click(bank3Btn)
    expect(display).toHaveTextContent(BANK_NAMES.BANK3)
    await userEvent.click(bank1Btn)
    expect(display).toHaveTextContent(BANK_NAMES.BANK1)
  })

  it('should update when the volume buttons are clicked', async () => {
    render(<App />)
    const volumeDisplay = screen.getByText(/volume/i)
    const increaseVol = screen.getByRole('button', {
      name: BUTTON_NAMES.VOL_UP,
    })
    const decreaseVol = screen.getByRole('button', {
      name: BUTTON_NAMES.VOL_DOWN,
    })

    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 1`)
    await userEvent.click(decreaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 0.9`)
    await userEvent.click(decreaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 0.8`)
    await userEvent.click(decreaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 0.7`)
    await userEvent.click(increaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 0.8`)
    await userEvent.click(increaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 0.9`)
  })

  it('voulme should not exceed 1', async () => {
    render(<App />)
    const volumeDisplay = screen.getByText(/volume/i)
    const increaseVol = screen.getByRole('button', {
      name: BUTTON_NAMES.VOL_UP,
    })
    const decreaseVol = screen.getByRole('button', {
      name: BUTTON_NAMES.VOL_DOWN,
    })

    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 1`)
    await userEvent.click(increaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 1`)
    await userEvent.click(decreaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 0.9`)
  })

  it('voulme should not go below 0', async () => {
    render(<App />)
    const volumeDisplay = screen.getByText(/volume/i)
    const decreaseVol = screen.getByRole('button', {
      name: BUTTON_NAMES.VOL_DOWN,
    })
    const increaseVol = screen.getByRole('button', {
      name: BUTTON_NAMES.VOL_UP,
    })

    await userEvent.tripleClick(decreaseVol)
    await userEvent.tripleClick(decreaseVol)
    await userEvent.tripleClick(decreaseVol)
    await userEvent.tripleClick(decreaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 0`)
    await userEvent.click(increaseVol)
    expect(volumeDisplay).toHaveTextContent(`${SCREEN_LABELS.VOLUME}: 0.1`)
  })

  it('should be blank when power turned off', async () => {
    render(<App />)

    const powerButton = screen.getByRole('button', { name: BUTTON_NAMES.POWER })
    expect(screen.getByText(/Bank: Synthwave/)).toBeInTheDocument()
    await userEvent.click(powerButton)
    expect(screen.queryByText(/Bank: Synthwave/)).not.toBeInTheDocument()
  })

  // TODO: mock Howler to test audio & prevent console errors
  it('should display previous values when turned back on', async () => {
    render(<App />)

    const bank3Btn = screen.getByRole('button', { name: BUTTON_NAMES.BANK3 })
    await userEvent.click(bank3Btn)
    const padW = screen.getByRole('button', { name: PAD_LABELS.W })
    await userEvent.click(padW)
    const decreaseVol = screen.getByRole('button', {
      name: BUTTON_NAMES.VOL_DOWN,
    })
    await userEvent.tripleClick(decreaseVol)
    const powerButton = screen.getByRole('button', { name: BUTTON_NAMES.POWER })
    await userEvent.click(powerButton)
    await userEvent.click(powerButton)

    expect(screen.getByText(`Bank: ${BANK_NAMES.BANK3}`)).toBeInTheDocument()
  })
})
