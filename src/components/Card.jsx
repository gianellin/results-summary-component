import Result from './Results.jsx';
import Summary from './Summary.jsx';
import data from './data/data.json';
import '../App.css';

function Card() {
  return (
    <main className="container">
      <Result data={data} />
      <Summary data={data} />
    </main>
  );
}

export default Card;
