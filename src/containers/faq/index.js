import faqData from "../../data/faq.json";

const { data } = faqData;
const filterFAQByType = (filterType) => data.filter(({ type }) => type === filterType);
const courseQuestions = filterFAQByType('course');
const upaQuestions = filterFAQByType('upa');

const renderQuestion = ({ question, answer }) => (
  <div className="container is-max-desktop mb-4">
    <details className="box has-text-left">
      <summary className="has-text-centered is-size-5 has-text-weight-bold">{question}</summary>
      {answer}
    </details>
  </div>
);

function FAQPage() {
  return (<section class="section">
    <h1 class="title">FAQ</h1>
    <h2 class="subtitle">Perguntas frequentes</h2>

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
