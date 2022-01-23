import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export const ProductList = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  // const { removeFromDom } = props;
  const [deleteItem, setDeleteItem] = useState();
  const history = useHistory();

  const apiURL = 'http://localhost:8000/api/product';

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setAllProducts(res.data.results);
      })
      .catch(err => console.log(err));
  }, [apiURL, deleteItem]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/product/delete/${id}`)
      .then(res => {
        console.log(res);
        setDeleteItem(res)
        // removeFromDom(id)
      })
      .catch(err => console.log(err));
    history.push('/');
  }

  return (
    <div>
      {
        allProducts.map((product, i) => {
          return (
            <div className="d-flex justify-content-center">
              <ul className="list-group list-group-flush w-50">
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center px-4">
                  <Link to=
                    {`/${product._id}`} className="link-info text-decoration-none">
                    {product.title}
                  </Link>
                  <span className="fw-bold">
                    <button onClick={(e) => { deleteProduct(product._id) }} className="badge bg-danger border-0">-</button>
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
