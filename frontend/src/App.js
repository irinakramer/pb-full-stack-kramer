import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componetns/Header';
import Controls from './componetns/Controls';
import Graph from './componetns/Graph';
import Spinner from './componetns/Spinner';
import Welcome from './componetns/Welcome';
import Notification from './componetns/Notification';
import Error from './componetns/Error';
import ApplicationHelper from './helpers/ApplicationHelper';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

function App() {
  const { parseData, calculateGraphData, isZeroCount } = ApplicationHelper;

  const [sightings, setSightings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [year, setYear] = useState(0);
  const [commonName, setCommonName] = useState('');
  const [graphData, setGraphData] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const fetchSightings = async () => {
    fetch(`${API_URL}/sighting`)
      .then((res) => res.json())
      .then((data) => {
        setSightings(parseData(data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchSightings();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = calculateGraphData(sightings, commonName, year);

    setGraphData(data);
    setShowToast(isZeroCount(data));
  };

  const handleReset = (e) => {
    e.preventDefault();

    setYear(0);
    setCommonName('');
    setGraphData([]);
  };

  if (error) return <Error />;

  if (loading) return <Spinner />;

  return (
    <div className="App">
      <Header />
      <Welcome />
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
      <Notification
        showToast={showToast}
        setShowToast={setShowToast}
        year={year}
        commonName={commonName}
      />
    </div>
  );
}

export default App;
