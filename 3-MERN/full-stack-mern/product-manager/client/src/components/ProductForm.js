import React, { useState } from 'react';
import axios from 'axios';

export const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product/new', {
      title,
      price,
      description
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setTitle("");
    setPrice("");
    setDescription("");
  }

  return (
    <div className='container p-3'>
      <form onSubmit={onSubmitHandler} className='px-5'>
        <div class="row align-items-center mb-3">
          <div class="col">
            Title
          </div>
          <div class="col-8">
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" class="form-control" />
          </div>
        </div>
        <div class="row align-items-center mb-3">
          <div class="col">
            Price
          </div>
          <div class="col-8">
            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" class="form-control" />
          </div>
        </div>
        <div class="row align-items-center mb-3">
          <div class="col">
            Description
          </div>
          <div class="col-8">
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} class="form-control" ></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <input className="btn btn-primary m-3 px-5" type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

