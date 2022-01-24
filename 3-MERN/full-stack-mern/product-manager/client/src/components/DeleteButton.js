/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import axios from 'axios';

export default props => {
  const { productId, successCallback, buttonName } = props;

  const deleteProduct = (e) => {
    axios.delete('http://localhost:8000/api/product/delete/' + productId)
      .then(res => {
        successCallback();
      })
  }

  let classAdds = "";
  buttonName === "Delete" ?
    classAdds += 'btn btn-danger m-3 px-5 fw-bold text-white' :
    classAdds += 'badge bg-danger border-0'

  return (
    <button onClick={deleteProduct} className={`${classAdds}`}>{buttonName}</button>
  )
}