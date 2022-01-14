import React from 'react';
import './App.css';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <div className="">
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
