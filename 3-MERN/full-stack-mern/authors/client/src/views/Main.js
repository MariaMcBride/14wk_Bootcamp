/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

export default () => {
  const [allAuthors, setAllAuthors] = useState([]);

  const apiURL = 'http://localhost:8000/';

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setAllAuthors(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = (authorId) => {
    setAllAuthors(allAuthors.filter(author => author._id !== authorId))
  }

  return (
    <>
      <h3 className="p-4 text-center mb-0">Favorite Authors</h3>
      <div className="card p-5 mx-auto d-flex justify-content-center" style={{ width: 600 + "px" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="ps-3">Authors</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {
            allAuthors.map((author, idx) => {
              return (
                <tbody>
                  <tr className="d-flex align-items-center justify-content-between border-0 border-white">
                    <td key={idx} className="col ps-3">{author.name}</td>
                    <td className="col pe-0" style={{ textAlign: "end" }}>
                      <Link to={`/update/${author._id}`}
                        className="btn btn-warning px-4 me-3 fw-bold text-white">
                        Edit
                      </Link>
                      <DeleteButton authorId={author._id} successCallback={() =>
                        removeFromDom(author._id)} buttonValue="Delete" classMods="btn px-3 me-3 fw-bold text-white" />
                    </td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
        <Link to={'/new'}
          className="btn btn-primary px-4 fw-bold text-white">
          Add New Author
        </Link>
      </div>
    </>
  );
};