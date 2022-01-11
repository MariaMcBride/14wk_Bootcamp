import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card m-5">
          <div className="card-body">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;