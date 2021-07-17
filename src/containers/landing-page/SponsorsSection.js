import sponsors from '../../data/sponsors.json'

import './SponsorsSection.css'

const { data } = sponsors

function SponsorsSection() {
  return (
    <section className="section">
      <h2 className="title">Apoio</h2>

      <div className="columns is-mobile is-centered">
        {data.map((sponsor) => (
          <a
            className="sponsor-container"
            href={sponsor.sponsorUrl}
            target="_blank"
          >
            <img className="sponsor" src={sponsor.imageUrl} />
          </a>
        ))}
      </div>
    </section>
  )
}

export default SponsorsSection
