/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import axios from 'axios';

export default (props) => {
  const { authorId, successCallback, classMods } = props;

  const deleteAuthor = (e) => {
    axios.delete('http://localhost:8000/api/author/delete/' + authorId)
      .then(res => {
        successCallback();
      })
  }

  return (
    <button onClick={deleteAuthor} className={`btn-danger ${classMods}`}>Delete</button>
  )
}