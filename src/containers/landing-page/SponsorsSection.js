import sponsors from "../../data/sponsors.json";

const { data } = sponsors;

function SponsorsSection() {
  return (
    <section className="section">
      <h2 className="title">Apoio</h2>

      <div className="columns is-centered">
        {data.map((sponsor) => (
          <a className="p-6" href={sponsor.sponsorUrl} target="_blank">
            <img className="image is-128x128" src={sponsor.imageUrl} />
          </a>))
        }
      </div>

    </section>
  );
}

export default SponsorsSection;
