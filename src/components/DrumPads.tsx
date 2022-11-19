import type { Sample } from '../types/general'

type Props = {
  activeElement: string
  setActiveElement: (name: string) => void
  soundBank: Sample[]
  handleClick: (sample: Sample) => void
}

export const DrumPads = ({
  activeElement,
  setActiveElement,
  soundBank,
  handleClick,
}: Props) => {
  const DrumPads = soundBank.map((entry, i) => {
    const animatePadClass = activeElement === entry.name ? 'pad-anim' : ''

    return (
      <button
        key={i}
        id={entry.name}
        className={`drum-pad ${entry.pad} ${animatePadClass}`}
        onClick={() => handleClick(entry)}
        onAnimationEnd={() => setActiveElement('')}
      >
        {entry.trigger}
      </button>
    )
  })

  return <div className="right-panel no-select">{DrumPads}</div>
}
