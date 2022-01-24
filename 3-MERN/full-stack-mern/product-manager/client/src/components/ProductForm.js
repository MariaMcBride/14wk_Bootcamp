/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default (props) => {
  const { initialTitle, initialPrice, initialDescription, onSubmitProp, buttonName } = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  const history = useHistory();

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    onSubmitProp({ title, price, description });
    history.push('/');
  }

  let classAdds = "";
  buttonName === "Create" ?
    classAdds += 'btn-primary' :
    classAdds += 'btn-warning'

  return (
    <div className='container p-3'>
      <form onSubmit={onSubmitHandler} className='px-5'>
        <div className="row align-items-center mb-3">
          <div className="col">
            Title
          </div>
          <div className="col-8">
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" className="form-control" />
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col">
            Price
          </div>
          <div className="col-8">
            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" name="price" className="form-control" />
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col">
            Description
          </div>
          <div className="col-8">
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} name="description" className="form-control" ></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <input className={`btn ${classAdds} m-3 px-5 fw-bold text-white`} type="submit" value={buttonName} />
        </div>
      </form>
    </div>
  );
};

