import './App.css';
import Tabs from './components/Tabs';

function App() {
  const callbackMsg = (content) => {
    return (`${content} Here's more vague content.`);
  }

  const tabs = [
    { header: "Tab 1", content: "Tab 1 content is showing here.", callback: callbackMsg },
    { header: "Tab 2", content: "Tab 2 content is showing here.", callback: callbackMsg },
    { header: "Tab 3", content: "Tab 3 content is showing here.", callback: callbackMsg }
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
