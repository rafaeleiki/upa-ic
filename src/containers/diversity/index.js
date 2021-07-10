import { Fragment } from 'react';
import './styles.css'

function DiversityPage() {
  return (<Fragment>
    <section className="diversity hero is-large is-info mb-6">
      <div className="hero-body"></div>
    </section>

    <section className="section">
      <h1 className="title">Diversidade</h1>
      <h2 className="subtitle mb-6">Conheça nossas iniciativas</h2>

      <div className="level is-desktop">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Mulheres</p>
            <p className="title">XXXX</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Sistema de cotas</p>
            <p className="title"><a href="https://www.comvest.unicamp.br/cotas/" target="_blank">15 a 27% das vagas</a></p>
          </div>
        </div>
      </div>

      <article class="message">
        <div class="message-header">
          <p>Como enxergamos diversidade</p>
        </div>
        <div class="message-body has-text-justified">
          A diversidade é um elemento essencial em qualquer ambiente de inovação. Buscamos sempre trazer maior 
          representatividade de diferentes grupos e dar suporte a eles. Discriminação ou contrangimento de
          qualquer tipo não serão aceitos nem tolerados, sejam eles raciais, de gênero, sexualidade, capacitistas
          ou de qualquer outro tipo.
        </div>
      </article>

      <div className="columns">
        <div class="column is-one-third card">
          <div class="card-content">
            <p class="title">
              Mulheres
            </p>
            <p class="subtitle">
            Android Smart Girls
            </p>
            <p>
            Conheça o projeto que vem trazendo cada vez mais garotas para o mundo da programação.
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="https://www.unicamp.br/unicamp/ju/595/lugar-de-menina-e-na-computacao" target="_blank">Conheça mais</a>
              </span>
            </p>
          </footer>
        </div>
      </div>

    </section>

  </Fragment>);
}

export default DiversityPage;
