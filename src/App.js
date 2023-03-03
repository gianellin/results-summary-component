import ResultOverview from './components/Results/Results.jsx';
import ResultSummary from './components/Summary/Summary.jsx';
import data from '../src/data/data.json';

function App() {
  return (
    <main className="flex justify-center items-center h-screen bg-paleblue overflow-auto">
    <section className="flex flex-col w-[48em] mx-auto md:grid md:grid-cols-2 h-100 md:h-[32em] md:rounded-[2em] bg-white">
      <ResultOverview data={data} />
      <ResultSummary data={data} />
    </section>
  </main>
);
}

export default App;
