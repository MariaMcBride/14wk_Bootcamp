/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default (props) => {
  const { initialName, onSubmitProp, errors, authorId, buttonStyle } = props;
  const [name, setName] = useState(initialName);
  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name });
  }

  let classMods = "btn m-3 mb-0 fw-bold text-white";
  buttonStyle === "Update" ?
    classMods += "px-3" :
    classMods += "m-3 px-5"

  return (
    <>
      <div className="card container p-5" style={{ width: 450 + "px" }}>
        <form onSubmit={onSubmitHandler} className="">
          {
            errors &&
            errors.map((err, idx) =>
              <p key={idx} className="alert alert-danger">{err}</p>)
          }
          {
            (name.length !== 0 && name.length < 3) &&
            <p className="alert alert-danger">Name must be at least 3 characters long.</p>
          }
          {
            name.length !== 0 && !(/^[a-zA-Z-,.]+(\s{0,1}[a-zA-Z-,. ])*$/.test(name)) &&
            <p className="alert alert-danger">{name} is not a valid name.</p>
          }
          <div className="row align-items-center mb-3">
            <div className="col">
              Author Name
            </div>
            <div className="col-8">
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" className="form-control" />
            </div>
          </div>
          <div className="d-flex justify-content-center gap-2">
            <Link to={'/'}
              className={`btn-secondary ${classMods}`}>
              Cancel
            </Link>
            <input className={`btn-info ${classMods} text-white`} type="submit" value="Submit"
            />
            {
              authorId !== "" &&
              <DeleteButton authorId={authorId} successCallback={() =>
                history.push('/')} buttonValue="Delete" classMods={classMods} />
            }
          </div>
        </form>
      </div>
    </>
  )
}
