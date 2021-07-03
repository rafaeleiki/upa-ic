import logoIc from './logo-ic.png';

function LandingSection() {
  return (
    <section className="hero is-info is-fullheight">
        <div className="hero-head">
            <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                <a className="navbar-item">
                    <img src={logoIc} alt="Logo" />
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroB">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item is-active">
                    Instituto
                    </a>
                    <a className="navbar-item">
                    Programação
                    </a>
                    <a className="navbar-item">
                    Diversidade
                    </a>
                </div>
                </div>
            </div>
            </nav>
        </div>

        <div className="hero-body">
            <div className="container has-text-centered">
            <p className="title">
                Instituto de Computação da Unicamp
            </p>
            <p className="subtitle">
                Unicamp de Portas Abertas 2021
            </p>
            </div>
        </div>
    </section>
  );
}

export default LandingSection;
