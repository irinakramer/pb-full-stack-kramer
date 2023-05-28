import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componetns/Header';
import Controls from './componetns/Controls';
import Graph from './componetns/Graph';
import dummyData from './data/dummy';
import ApplicationHelper from './helpers/ApplicationHelper';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

function App() {
  const { parseData, calculateGraphData } = ApplicationHelper;

  const [sightings, setSightings] = useState([]);
  const [year, setYear] = useState(0);
  const [commonName, setCommonName] = useState('');
  const [graphData, setGraphData] = useState([]);

  const fetchSightings = async () => {
    fetch(`${API_URL}/sighting`)
      .then((res) => res.json())
      .then((data) => setSightings(parseData(data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSightings();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = calculateGraphData(sightings, commonName, year);

    setGraphData(data);
  };

  const handleReset = (e) => {
    e.preventDefault();

    setYear(0);
    setCommonName('');
    setGraphData([]);
  };

  return (
    // TODO - add loading spinner
    // TODO - add UI for empty graphdata
    <div className="App">
      <Header />
      <Controls
        sightings={sightings}
        year={year}
        setYear={setYear}
        commonName={commonName}
        setCommonName={setCommonName}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
      <Graph data={graphData} />
    </div>
  );
}

export default App;
