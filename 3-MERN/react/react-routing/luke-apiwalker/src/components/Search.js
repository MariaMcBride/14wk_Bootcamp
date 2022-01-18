import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [category, setCategory] = useState([]);
  const [resource, setResource] = useState("people");
  const [id, setId] = useState(1);
  const history = useHistory();

  const apiURL = 'https://swapi.dev/api/';

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(response.data);
      let results = Object.keys(response.data)
      setCategory(results);
    })
      .catch(err => {
        console.log(err)
      });
  }, []);

  console.log(category);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/${resource}/${id}`);
  }

  return (
    <div className="card bg-dark mb-3">
      <form onSubmit={submitHandler} className="card-body d-flex justify-content-center">
        <div className="col-auto me-3">
          <label className="form-control-plaintext text-white">Search for:</label>
        </div>
        <div className="col-auto me-5">
          <select onChange={(e) => { setResource(e.target.value) }} className="form-select" name="category" id="">
            {
              category.map((resource, i) => {
                return (
                  <option key={i} value={resource}>{resource}</option>
                )
              })
            }
          </select>
        </div>
        <div className="col-auto me-3">
          <label className="form-control-plaintext text-white">ID:</label>
        </div>
        <div className="col-sm-2 me-3">
          <input onChange={(e) => { setId(e.target.value) }} className="form-control" type="number" name="" id="" />
        </div>
        <div className="col-auto">
          <input className="btn btn-warning text-muted fw-bold" type="submit" value="Search" />
        </div>
      </form>
    </div>
  )
}

export default Search
