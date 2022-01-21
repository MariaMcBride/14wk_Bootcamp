import React from "react";
import { ProductForm } from "../components/ProductForm";

export const Main = () => {
  return (
    <div className="card w-50 mx-auto">
      <h3 className="p-4 text-center mb-0">Product Manager</h3>
      <ProductForm />
    </div>
  );
};
