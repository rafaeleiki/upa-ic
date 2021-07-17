import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function YoutubeLinksSection() {
  return (
    <Fragment>
      <section className="section">
        <h2 className="title">Links do evento</h2>

        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
            <a
              href="https://www.youtube.com/watch?v=htUSCIjxReQ"
              className="tile is-child notification "
              target="_blank"
              rel="noreferrer"
            >
              <p className="title">
                <FontAwesomeIcon icon={faYoutube} /> 20 de Julho
              </p>
              <p className="subtitle">
                https://www.youtube.com/watch?v=htUSCIjxReQ
              </p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=mV28eBgJjC4
"
              className="tile is-child notification"
              target="_blank"
              rel="noreferrer"
            >
              <p className="title">
                <FontAwesomeIcon icon={faYoutube} /> 21 de Julho
              </p>
              <p className="subtitle">
                https://www.youtube.com/watch?v=mV28eBgJjC4
              </p>
            </a>
          </div>
          <div className="tile is-vertical is-parent ">
            <a
              href="https://www.youtube.com/watch?v=kV4IpwsfhPE"
              className="tile is-child notification"
              target="_blank"
              rel="noreferrer"
            >
              <p className="title">
                <FontAwesomeIcon icon={faYoutube} /> 22 de Julho
              </p>
              <p className="subtitle">
                https://www.youtube.com/watch?v=kV4IpwsfhPE
              </p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=YOuSLXq22sI"
              className="tile is-child notification "
              target="_blank"
              rel="noreferrer"
            >
              <p className="title">
                <FontAwesomeIcon icon={faYoutube} /> 23 de Julho
              </p>
              <p className="subtitle">
                https://www.youtube.com/watch?v=YOuSLXq22sI
              </p>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default YoutubeLinksSection
