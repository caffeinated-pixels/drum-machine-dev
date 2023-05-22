import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { LINKS } from '../constants/names'

export const BottomBar = () => {
  return (
    <div className="bottom-bar text-center">
      <p>
        Coded by&nbsp;
        <a href={LINKS.PORTFOLIO} title="Stevie's web app portofolio page">
          Stevie Gill
        </a>
        {'; '}
        <a href={LINKS.GITHUB} title="Drum machine Github repo">
          <FontAwesomeIcon icon={faGithubSquare} className="githubIcon" /> repo
        </a>
      </p>
    </div>
  )
}
