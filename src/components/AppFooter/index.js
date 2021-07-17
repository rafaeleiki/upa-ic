import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

function AppFooter() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>2021</strong>. Este site é alimentado por um projeto aberto no{' '}
          <a href="https://github.com/rafaeleiki/upa-ic" target="_blank">
            GitHub
          </a>
          , contribua você também!
        </p>
        <p>
          <a href="https://www.instagram.com/upa.ic/" target="_blank">
            <FontAwesomeIcon
              className="icon is-medium mx-2"
              icon={faInstagram}
            />
          </a>
          <a href="https://www.facebook.com/UPA.Unicamp.IC" target="_blank">
            <FontAwesomeIcon
              className="icon is-medium mx-2"
              icon={faFacebook}
            />
          </a>
          <a href="https://twitter.com/UPA_IC_Unicamp" target="_blank">
            <FontAwesomeIcon className="icon is-medium mx-2" icon={faTwitter} />
          </a>
          <a href="https://github.com/rafaeleiki/upa-ic" target="_blank">
            <FontAwesomeIcon className="icon is-medium mx-2" icon={faGithub} />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default AppFooter
