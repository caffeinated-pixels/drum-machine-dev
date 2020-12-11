import React from 'react'

export default function TopBar() {
  return (
    <div className="top-bar">
      <p>
        Mercenary <span className="thin">Instruments</span>{' '}
        <span className="model">LV-426</span>
      </p>
      <img
        className="logo"
        src="./favicon.png"
        alt="Mercenary Instruments logo"
      />
    </div>
  )
}
