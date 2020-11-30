import React from 'react'

function TopBar() {
  return (
    <div className="top-bar">
      <p>
        Mercenary <span className="thin">Instruments</span>{' '}
        <span className="model">LV-426</span>
      </p>
      <img
        className="logo"
        src="https://thecakeisaliegaming.files.wordpress.com/2020/11/mercenary-32x32-1.png"
        alt="Mercenary Instruments logo"
      />
    </div>
  )
}

export default TopBar
