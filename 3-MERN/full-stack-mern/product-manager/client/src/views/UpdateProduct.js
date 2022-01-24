/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import DeleteButton from "../components/DeleteButton";

const UpdateProduct = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  const apiURL = `http://localhost:8000/api/product/${id}`;
  const updateURL = `http://localhost:8000/api/product/update/${id}`;

  console.log(id);

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setProduct(res.data.results);
        setLoaded(true);
        // history.push(`/${id}`)
      })
      .catch(err => console.log(err));
  }, [apiURL, history, id]);

  const updateProduct = product => {
    axios.put(updateURL, product)
      .then(res => console.log(res));
  }

  return (
    <div>
      <h3>Update Product</h3>
      {
        loaded && <>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDescription={product.description}
            buttonName="Update" />
          <div className="d-flex justify-content-center align-items-center gap-1">
            <Link to={'/'} className="btn btn-success m-3 px-5 fw-bold text-white">
              Home
            </Link>
            <DeleteButton
              productId={product._id}
              buttonName="Delete"
              successCallback={() =>
                history.push('/')} />
          </div>
        </>
      }
    </div>
  )
}

export default UpdateProduct;