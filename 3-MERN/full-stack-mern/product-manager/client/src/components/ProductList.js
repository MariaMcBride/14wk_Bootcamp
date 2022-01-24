/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const history = useHistory();

  const apiURL = 'http://localhost:8000/api/product';

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setAllProducts(res.data.results);
      })
      .catch(err => console.log(err));
  }, [apiURL]);

  const removeFromDom = productId => {
    setAllProducts(allProducts.filter(product => product._id != productId))
    history.push('/');
  }

  return (
    <div>
      {
        allProducts.map((product, idx) => {
          return (
            <div className="d-flex justify-content-center">
              <ul className="list-group list-group-flush w-50">
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center px-4">
                  <Link to=
                    {`/${product._id}`} className="link-info text-decoration-none">
                    {product.title}
                  </Link>
                  <span className="fw-bold">
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} buttonName="-" />
                  </span>
                </li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList;