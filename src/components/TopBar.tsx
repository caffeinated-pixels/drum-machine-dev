import { TOPBAR } from '../constants/names'

export const TopBar = () => {
  return (
    <div className="top-bar">
      <p>
        {TOPBAR.COMPANY_FIRST_WORD}{' '}
        <span className="thin">{TOPBAR.COMPANY_SECOND_WORD}</span>{' '}
        <span className="model">{TOPBAR.MODEL}</span>
      </p>
      <img className="logo" src={TOPBAR.IMG_SRC} alt={TOPBAR.IMG_ALT} />
    </div>
  )
}
