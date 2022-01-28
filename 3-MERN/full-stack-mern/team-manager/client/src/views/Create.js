/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';

export default () => {
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const createURL = 'http://localhost:8000/api/player/new';

  const createPlayer = (newPlayer) => {
    console.log(newPlayer);
    axios.post(createURL, newPlayer)
      .then(res => {
        console.log(res)
        history.push('/')
      })
      .catch(err => {
        console.log(err.response);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }

  return (
    <>
      <h4 className="p-4 text-center mb-0">Add New Player</h4>
      <Form
        onSubmitProp={createPlayer}
        playerId=""
        initialName=""
        initialPosition=""
        errors={errors} />
    </>
  )
}