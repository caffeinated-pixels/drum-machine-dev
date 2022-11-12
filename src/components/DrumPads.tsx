export const DrumPads = ({ soundBank, handleClick }) => {
  const DrumPadss = soundBank.map((entry, i) => {
    return (
      <button
        key={i}
        id={entry.name}
        className={`drum-pad ${entry.pad} `}
        onClick={() => handleClick(entry)}
      >
        {entry.trigger}
      </button>
    )
  })

  return <div className="right-panel no-select">{DrumPadss}</div>
}
