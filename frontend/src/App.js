import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componetns/Header';
import Controls from './componetns/Controls';
import Graph from './componetns/Graph';
import dummyData from './data/dummy';
import ApplicationHelper from './helpers/ApplicationHelper';

function App() {
  const { parseData, calculateGraphData } = ApplicationHelper;
  const parsedData = parseData(dummyData);

  const [year, setYear] = useState(0);
  const [commonName, setCommonName] = useState('');
  const [graphData, setGraphData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = calculateGraphData(parsedData, commonName, year);

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
        data={parsedData}
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
