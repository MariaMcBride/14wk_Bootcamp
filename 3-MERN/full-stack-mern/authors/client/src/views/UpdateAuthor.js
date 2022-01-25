/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";

export default () => {
  const { id } = useParams();
  const history = useHistory();
  const [author, setAuthor] = useState();
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const apiURL = `http://localhost:8000/api/author/${id}`;
  const updateURL = `http://localhost:8000/api/author/update/${id}`;

  console.log(id);

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data);
        setAuthor(res.data.results);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const updateAuthor = (editAuthor) => {
    console.log(editAuthor);
    axios.put(updateURL, editAuthor)
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
    <div>
      <h3 className="p-4 text-center mb-0">Edit this Author</h3>
      {
        loaded && <>
          <AuthorForm
            onSubmitProp={updateAuthor}
            initialName={author.name}
            authorId={author._id}
            buttonStyle="Update"
            errors={errors} />
        </>
      }
    </div>
  )
}