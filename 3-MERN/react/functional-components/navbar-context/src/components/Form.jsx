import React, { useContext } from 'react'
import Context from '../context/Context';
// import styles from './Form.module.css';

const Form = (props) => {
  const currentUser = useContext(Context);

  const changeHandler = (e) => {
    currentUser.setUserName(e.target.value);
  };

  return (
    <div className="container m-4 row g-3 align-items-center justify-content-center">
      <div class="col-auto">
        <label class="col-form-label text-white">Your Name</label>
      </div>
      <div class="col-auto">
        <input onChange={changeHandler} className="form-control me-2" type="text" value={currentUser.userName} />
      </div>
    </div>
  )
}

export default Form;

