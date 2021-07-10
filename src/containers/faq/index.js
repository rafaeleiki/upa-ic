import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import faqData from "../../data/faq.json";

let { data } = faqData;
data = data.map((faq) => {
  const { answer, question } = faq;
  return {
    ...faq,
    forQuery: (answer + question).toLowerCase(),
  };
});

const filterFAQByType = (filterType) => data.filter(({ type }) => type === filterType);
const courseQuestions = filterFAQByType('course');
const upaQuestions = filterFAQByType('upa');

const renderQuestion = ({ question, answer }) => (
  <div className="container is-max-desktop mb-4">
    <details className="box has-text-left">
      <summary className="is-size-5 has-text-weight-bold">{question}</summary>
      <div dangerouslySetInnerHTML={{ __html: answer}} />
    </details>
  </div>
);

const searchFaq = (query) => data.filter(({ forQuery }) => !!query ? forQuery.indexOf(query) >= 0 : false);

function FAQPage() {
  const [query, setQuery] = useState('');

  return (<section class="section">
    <h1 class="title">FAQ</h1>
    <h2 class="subtitle">Perguntas frequentes</h2>

    <div className="container is-max-desktop mb-6">
      <div className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Digite um pedaço da sua pergunta" onChange={(e) => setQuery(e.target.value)} />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>
      { searchFaq(query).map(renderQuestion) }
    </div>
    

    <div className="columns">
    <div className="column">
        <h3 class="subtitle">Perguntas sobre o UPA</h3>
        { upaQuestions.map(renderQuestion) }
      </div>
      <div className="column">
        <h3 class="subtitle">Perguntas sobre o curso</h3>
        { courseQuestions.map(renderQuestion) }
      </div>
    </div>
    
  </section>);
}

export default FAQPage;
