import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card m-5 p-3 bg-secondary bg-gradient">
          <div className="card-body">
            <h1 className="text-center mb-4">Form Validation</h1>
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
