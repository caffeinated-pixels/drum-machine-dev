export const RightPanel = ({ soundBank, handleClick }) => {
  const drumpads = soundBank.map((entry, i) => {
    return (
      <div
        key={i}
        id={entry.name}
        className={`drum-pad ${entry.pad} `}
        onClick={handleClick}
      >
        <audio
          id={entry.trigger}
          className="clip"
          src={entry.src}
          preload="auto"
        >
          {' '}
        </audio>
        {entry.trigger}
      </div>
    )
  })

  return <div className="right-panel no-select">{drumpads}</div>
}
