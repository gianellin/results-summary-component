import ResultOverview from './Results.jsx';
import ResultSummary from './Summary.jsx';
import data from './data/data.json';
import '../App.css';

function Card() {
  return (
    <main>
    <section className="container">
      <ResultOverview data={data} />
      <ResultSummary data={data} />
    </section>
  </main>
);
}

export default Card;
