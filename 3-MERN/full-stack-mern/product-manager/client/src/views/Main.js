/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default () => {
  const [allProducts, setAllProducts] = useState([]);

  const apiURL = 'http://localhost:8000/api/product';
  const createURL = 'http://localhost:8000/api/product/new';

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data);
        setAllProducts(res.data);
      })
      .catch(err => console.log(err));
  }, [apiURL]);

  const removeFromDom = productId => {
    // eslint-disable-next-line eqeqeq
    setAllProducts(allProducts.filter(product => product._id != productId))
  }

  const createProduct = product => {
    axios.post(createURL, product)
      .then(res => {
        setAllProducts([...allProducts, res.data]);
      })
  }

  return (
    <>
      <div className="card w-50 mx-auto">
        <h3 className="p-4 text-center mb-0">Product Manager</h3>
        <ProductForm
          onSubmitProp={createProduct}
          initialTitle=""
          initialPrice=""
          initialDescription=""
          buttonName="Create" />

      </div>
      <hr className="my-5" />
      <div className="text-center">
        <h2 className="mb-4">All Products</h2>
        <ProductList
          allProducts={allProducts}
          removeFromDom={removeFromDom} />
      </div>
    </>
  );
};
