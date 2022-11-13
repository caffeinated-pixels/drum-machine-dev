import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

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
    const bank1Btn = screen.getByRole('button', { name: /bank 1/i })
    const bank2Btn = screen.getByRole('button', { name: /bank 2/i })
    const bank3Btn = screen.getByRole('button', { name: /bank 3/i })

    expect(display).toHaveTextContent('Synthwave')
    await userEvent.click(bank2Btn)
    expect(display).toHaveTextContent('Acoustic')
    await userEvent.click(bank3Btn)
    expect(display).toHaveTextContent('Chaos Engine')
    await userEvent.click(bank1Btn)
    expect(display).toHaveTextContent('Synthwave')
  })

  it('should update when the volume buttons are clicked', async () => {
    render(<App />)
    const volumeDisplay = screen.getByText(/volume/i)
    const increaseVol = screen.getByRole('button', { name: /vol\+/i })
    const decreaseVol = screen.getByRole('button', { name: /vol-/i })

    expect(volumeDisplay).toHaveTextContent('Volume: 1')
    await userEvent.click(decreaseVol)
    expect(volumeDisplay).toHaveTextContent('Volume: 0.9')
    await userEvent.click(decreaseVol)
    expect(volumeDisplay).toHaveTextContent('Volume: 0.8')
    await userEvent.click(decreaseVol)
    expect(volumeDisplay).toHaveTextContent('Volume: 0.7')
    await userEvent.click(increaseVol)
    expect(volumeDisplay).toHaveTextContent('Volume: 0.8')
    await userEvent.click(increaseVol)
    expect(volumeDisplay).toHaveTextContent('Volume: 0.9')
  })

  it('voulme should not exceed 1', async () => {
    render(<App />)
    const volumeDisplay = screen.getByText(/volume/i)
    const increaseVol = screen.getByRole('button', { name: /vol\+/i })
    const decreaseVol = screen.getByRole('button', { name: /vol-/i })

    expect(volumeDisplay).toHaveTextContent('Volume: 1')
    await userEvent.click(increaseVol)
    expect(volumeDisplay).toHaveTextContent('Volume: 1')
    await userEvent.click(decreaseVol)
    expect(volumeDisplay).toHaveTextContent('Volume: 0.9')
  })

  it('voulme should not go below 0', async () => {
    render(<App />)
    const volumeDisplay = screen.getByText(/volume/i)
    const decreaseVol = screen.getByRole('button', { name: /vol-/i })
    const increaseVol = screen.getByRole('button', { name: /vol\+/i })

    await userEvent.tripleClick(decreaseVol)
    await userEvent.tripleClick(decreaseVol)
    await userEvent.tripleClick(decreaseVol)
    await userEvent.tripleClick(decreaseVol)
    expect(volumeDisplay).toHaveTextContent(/Volume: 0$/)
    await userEvent.click(increaseVol)
    expect(volumeDisplay).toHaveTextContent('Volume: 0.1')
  })

  it('should be blank when power turned off', async () => {
    render(<App />)

    const powerButton = screen.getByRole('button', { name: /on \| off/i })
    expect(screen.getByText(/Bank: Synthwave/)).toBeInTheDocument()
    await userEvent.click(powerButton)
    expect(screen.queryByText(/Bank: Synthwave/)).not.toBeInTheDocument()
  })

  // TODO: mock the audio object
  it.skip('should be display previous values when turned back on', async () => {
    render(<App />)

    const bank3Btn = screen.getByRole('button', { name: /bank 3/i })
    await userEvent.click(bank3Btn)
    const padW = screen.getByRole('button', { name: /w/i })
    await userEvent.click(padW)
    const decreaseVol = screen.getByRole('button', { name: /vol-/i })
    await userEvent.tripleClick(decreaseVol)
    const powerButton = screen.getByRole('button', { name: /on \| off/i })
    await userEvent.click(powerButton)
    await userEvent.click(powerButton)

    expect(screen.getByText(/Bank: Chaos Engine/)).toBeInTheDocument()
  })
})
