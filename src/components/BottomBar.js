import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export const BottomBar = () => {
  return (
    <div className="bottom-bar text-center">
      <p>
        Coded by&nbsp;
        <a
          href="https://steviegill-webportfolio.netlify.app/"
          title="Stevie's web app portofolio page"
        >
          Stevie Gill
        </a>
        {'; '}
        <a
          href="https://github.com/caffeinated-pixels/drum-machine-dev"
          title="Drum machine Github repo"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="githubIcon" /> repo
        </a>
      </p>
    </div>
  )
}
