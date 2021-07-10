import faqData from "../../data/faq.json";

const { data } = faqData;

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
    <h2 class="subtitle">Perguntas frequentes sobre os nossos cursos</h2>

    { data.map(renderQuestion) }
    
  </section>);
}

export default FAQPage;
