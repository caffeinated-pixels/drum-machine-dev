export const DrumPads = ({
  activeElement,
  setActiveElement,
  soundBank,
  handleClick,
}) => {
  const DrumPads = soundBank.map((entry, i) => {
    const animatePadClass = activeElement === entry.name ? 'pad-anim' : ''

    return (
      <button
        key={i}
        id={entry.name}
        className={`drum-pad ${entry.pad} ${animatePadClass}`}
        onClick={() => handleClick(entry)}
        onAnimationEnd={() => setActiveElement(null)}
      >
        {entry.trigger}
      </button>
    )
  })

  return <div className="right-panel no-select">{DrumPads}</div>
}
