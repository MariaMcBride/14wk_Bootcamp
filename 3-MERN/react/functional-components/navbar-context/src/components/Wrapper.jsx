import React, { useState } from 'react';
import Context from '../context/Context';
// import styles from './Wrapper.module.css';

const Wrapper = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <Context.Provider
        value={{ userName, setUserName }}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default Wrapper;