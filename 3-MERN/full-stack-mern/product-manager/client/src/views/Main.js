import React from "react";
import { ProductForm } from "../components/ProductForm";
import { ProductList } from "../components/ProductList";

export const Main = () => {
  return (
    <>
      <div className="card w-50 mx-auto">
        <h3 className="p-4 text-center mb-0">Product Manager</h3>
        <ProductForm />
      </div>
      <hr className="my-5" />
      <div className="text-center">
        <h2 className="mb-4">All Products</h2>
        <ProductList />
      </div>
    </>
  );
};
