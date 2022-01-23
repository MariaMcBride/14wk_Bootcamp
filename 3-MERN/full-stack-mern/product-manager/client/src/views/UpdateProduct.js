import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export const UpdateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const apiURL = `http://localhost:8000/api/product/${id}`;
  const updateURL = `http://localhost:8000/api/product/update/${id}`;

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setTitle(res.data.results.title)
        setPrice(res.data.results.price)
        setDescription(res.data.results.description)
      })
      .catch(err => console.log(err));
  }, [apiURL]);

  const updateProduct = e => {
    e.preventDefault();
    axios.put(updateURL, {
      title,
      price,
      description
    })
      .then(res => {
        console.log(res);
        history.push(`/${id}`)
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h3>Update Product</h3>
      <form onSubmit={updateProduct} className='px-5'>
        <div className="row align-items-center mb-3">
          <div className="col">
            Title
          </div>
          <div className="col-8">
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" name="title" />
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col">
            Price
          </div>
          <div className="col-8">
            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" className="form-control" name="price" />
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col">
            Description
          </div>
          <div className="col-8">
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" name="description"></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <input className="btn btn-warning m-3 px-5 fw-bold text-white" type="submit" value="Update" />
        </div>
      </form>
    </div>
  )
}
