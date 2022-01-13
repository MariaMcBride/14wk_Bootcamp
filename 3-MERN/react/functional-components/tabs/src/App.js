import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabs = [
    { header: "Tab 1", content: "Tab 1 content is showing here." },
    { header: "Tab 2", content: "Tab 2 content is showing here." },
    { header: "Tab 3", content: "Tab 3 content is showing here." },
  ];

  return (
    <div className="App">
      <div className="container">
        <Tabs items={tabs} />
      </div>
    </div>
  );
}

export default App;
