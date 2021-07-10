import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
function ScheduleDialog(props) {
  const {
    title,
    description,
    author: { name, shortBio },
    day,
    hour,
    closeDialog,
    imgPath,
    linkedinUrl,
  } = props

  useEffect(() => {
    document.documentElement.classList.add('is-clipped')
  })

  const close = () => {
    document.documentElement.classList.remove('is-clipped')
    closeDialog()
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={close}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={close}
          ></button>
        </header>
        <section className="modal-card-body has-text-justified">
          <p className="mb-4">{description}</p>
          <p className="has-text-weight-bold">{name}</p>

          <img
            className="is-rounded image is-128x128"
            src={imgPath}
            alt="Foto do palestrante"
            align="right"
          />
          <p>{shortBio}</p>
          <p className="has-text-weight-bold">Contato</p>
          <a href={linkedinUrl} target="_blank">
            <FontAwesomeIcon className="icon is-medium" icon={faLinkedin} />
          </a>
        </section>
        <footer className="modal-card-foot has-text-centered">
          <div className="container">
            Dia {day}, às {hour}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ScheduleDialog
