/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default () => {
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const createURL = 'http://localhost:8000/api/author/new';

  const createAuthor = (newAuthor) => {
    console.log(newAuthor);
    axios.post(createURL, newAuthor)
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
      <h3 className="p-4 text-center mb-0">Add New Author</h3>
      <AuthorForm
        onSubmitProp={createAuthor}
        authorId=""
        initialName=""
        errors={errors} />
    </>
  )
}