import { useEffect } from 'react'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './LandingSection.css'

import computingDefinitions from '../../data/computing-definitions.json'

const { phrases } = computingDefinitions

const resetCarouselPagination = (carousel) => {
  const selectorsList = ['.slider-navigation-previous', '.slider-pagination', '.slider-navigation-next'];
  selectorsList.forEach((selector) => {
    const nodesList = document.querySelectorAll(selector);
    nodesList.forEach((node) => {
      node.parentNode.removeChild(node);
    });
  });

  carousel.reset();
}

function LandingSection() {
  const generateBulma = () => {
    return bulmaCarousel.attach('.hero-carousel', {
      autoplay: true,
      loop: true,
      pauseOnHover: false,
      autoplaySpeed: 6000,
      slidesToScroll: 1,
      slidesToShow: 1,
    });
  }

  useEffect(() => {
    const [carousel] = generateBulma()

    window.addEventListener('resize', () => {
      resetCarouselPagination(carousel);
    })
  })

  const carouselItems = phrases.map((singlePhrase, index) => (
    <div
      key={index}
      className={`item-${index + 1} p-2 pt-6 has-text-centered slide`}
    >
      <p className="subtitle slide-text">“{singlePhrase}”</p>
    </div>
  ))

  return (
    <section className="hero is-dark is-fullheight has-carousel">
      <div className="hero-carousel">{carouselItems}</div>
      <div className="hero-head pt-6">
        <div className="container has-text-centered p-2">
          <p className="title">
            <FontAwesomeIcon icon={faCoffee} /> Instituto de Computação
          </p>
          <p className="subtitle">Unicamp de Portas Abertas 2021</p>
          <p className="subtitle">20 a 23 de julho</p>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
