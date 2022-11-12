export const DrumPads = ({ currentSample, soundBank, handleClick }) => {
  console.log('drumpad render')

  const DrumPads = soundBank.map((entry, i) => {
    // TODO: remove class when animation is done
    const animatePadClass = currentSample === entry.name ? 'pad-anim' : ''

    return (
      <button
        key={i}
        id={entry.name}
        className={`drum-pad ${entry.pad} ${animatePadClass}`}
        onClick={() => handleClick(entry)}
      >
        {entry.trigger}
      </button>
    )
  })

  return <div className="right-panel no-select">{DrumPads}</div>
}
