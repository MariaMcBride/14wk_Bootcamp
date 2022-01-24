import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const apiURL = `http://localhost:8000/api/product/${id}`;
  const deleteURL = `http://localhost:8000/api/product/delete/${id}`;

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setProduct(res.data.results)
        history.push(`/${id}`)
      })
      .catch(err => console.log(err));
  }, [apiURL, history, id]);

  const deleteProduct = () => {
    axios.delete(deleteURL)
      .then(res => {
        console.log(res);
        history.push('/')
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="text-center my-auto">
      {
        product ? (
          <>
            <h3 className="mb-3">{product.title}</h3>
            <h4 className="mb-4">${product.price}</h4>
            <p className="w-50 mx-auto mb-4">{product.description}</p>
            <div className="d-flex justify-content-center align-items-center gap-4">
              <Link to={'/'} className="btn btn-success mt-3 px-4 fw-bold text-white">
                Home
              </Link>
              <Link to={`/update/${product._id}`} className="btn btn-warning mt-3 px-4 fw-bold text-white">
                Edit
              </Link>
              <Link to={`/delete/${product._id}`} onClick={(e) => deleteProduct()} className="btn btn-danger mt-3 px-4 fw-bold text-white">
                Delete
              </Link>
            </div>
          </>
        ) : <h3 className="text-center">Loading...</h3>
      }
    </div>
  )
}

export default ProductDetail;