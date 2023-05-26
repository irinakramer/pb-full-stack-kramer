import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componetns/Header';
import Controls from './componetns/Controls';
import Graph from './componetns/Graph';
import dummyData from './data/dummy';
import ApplicationHelper from './helpers/ApplicationHelper';

function App() {
  const { parseData } = ApplicationHelper;
  const parsedData = parseData(dummyData);

  return (
    <div className="App">
      <Header />
      <Controls data={parsedData} />
      <Graph data={parsedData} />
    </div>
  );
}

export default App;
