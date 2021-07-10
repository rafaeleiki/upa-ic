import { Fragment } from 'react';
import './styles.css'

function DiversityPage() {
  return (<Fragment>
    <section className="diversity hero is-large is-info">
      <div className="hero-body">
        <div className="container has-text-centered p-2">
          <div className="level is-desktop">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Mulheres</p>
                <p className="title">XXXX</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Sistema de cotas (pretos/pardos)</p>
                <p className="title"><a href="https://www.comvest.unicamp.br/cotas/" target="_blank">15 a 27% das vagas</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container is-max-desktop has-text-left pb-6">
        <h1 className="title">A diversidade é um elemento essencial</h1>
        <p>
          Buscamos sempre trazer maior representatividade de diferentes grupos e dar suporte a eles. 
          Discriminação ou contrangimento de qualquer tipo não são aceitos nem tolerados, sejam eles raciais, 
          de gênero, sexualidade, capacitistas ou de qualquer outro tipo.
        </p>
      </div>

      <hr />

      <div className="columns">
        <div class="column is-one-third card">
          <div class="card-content">
            <p class="title">Mulheres</p>
            <p class="subtitle">Android Smart Girls</p>
            <p>Conheça o projeto que vem trazendo cada vez mais garotas para o mundo da programação.</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="https://www.unicamp.br/unicamp/ju/595/lugar-de-menina-e-na-computacao" target="_blank">Conheça mais</a>
              </span>
            </p>
          </footer>
        </div>


        <div class="column is-one-third card">
          <div class="card-content">
            <p class="title">Mulheres</p>
            <p class="subtitle">Computing 4 All</p>
            <p>Incentivar a diversidade de gênero na computação, promovendo e apoiando ações que consolidem que esta é uma área para todos.</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="https://www.facebook.com/Computing4All.Unicamp" target="_blank">Conheça mais</a>
              </span>
            </p>
          </footer>
        </div>

        <div class="column is-one-third card">
          <div class="card-content">
            <p class="title">Geral</p>
            <p class="subtitle">Grupos de Apoio</p>
            <p>Organização de grupos de apoios para pessoas LGBTQIAP+, etc. Os grupos são privados para somente membros.</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span className="display-block">
                Divulgado para os ingressantes
              </span>
            </p>
          </footer>
        </div>
      </div>

    </section>

  </Fragment>);
}

export default DiversityPage;
