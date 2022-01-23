import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const ProductForm = () => {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   price: "",
  //   description: ""
  // })
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const history = useHistory();

  const apiURL = 'http://localhost:8000/api/product/new';

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    axios.post(apiURL, {
      title,
      price,
      description
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setTitle("");
    setPrice("");
    setDescription("");
    history.push('/');
  }

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
          <input className="btn btn-primary m-3 px-5" type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

