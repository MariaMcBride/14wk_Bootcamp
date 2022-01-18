import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Display = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const { id, resource } = useParams();

  const apiURL = `https://swapi.dev/api/${resource}/${id}`;

  useEffect(() => {
    axios.get(apiURL)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setError("");
      })
      .catch(err => {
        setError('https://i.pinimg.com/originals/bc/80/f2/bc80f2f4671fc690da0a456cfdbcd020.jpg')
        console.log(err)
      });
  }, [id, resource, apiURL, error]);

  return (
    <div className="container mx-auto card w-75 bg-dark p-5 d-flex justify-content-center">
      {
        (resource === 'people' && !error) ?
          <table className="table table-hover text-muted">
            <thead>
              <th>{data.name}</th>
            </thead>
            <tbody>
              <tr>Height: {data.height}</tr>
              <tr>Mass: {data.mass}</tr>
              <tr>Hair Color: {data.hair_color}</tr>
              <tr>Eye Color: {data.eye_color}</tr>
              <tr>Birth Year: {data.birth_year}</tr>
              <tr>Homeworld: {data.homeworld}</tr>
            </tbody>
          </table> :
          (resource === 'planets' && !error) ?
            <table className="table table-hover text-muted">
              <thead>
                <tr>
                  <th>{data.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>Climate: {data.climate}</tr>
                <tr>Gravity: {data.gravity}</tr>
                <tr>Terrain: {data.terrain}</tr>
                <tr>Population: {data.population}</tr>
              </tbody>
            </table> :
            (resource === 'films' && !error) ?
              <table className="table table-hover text-muted">
                <thead>
                  <tr>
                    <th>{data.title}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>Episode ID: {data.episode_id}</tr>
                  <tr>Release Date: {data.release_date}</tr>
                </tbody>
              </table> :
              (resource === 'species' && !error) ?
                <table className="table table-hover text-muted">
                  <thead>
                    <tr>
                      <th>{data.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>Classification: {data.classification}</tr>
                    <tr>Designation: {data.designation}</tr>
                    <tr>Average Lifespan: {data.average_lifespan}</tr>
                    <tr>Language: {data.language}</tr>
                  </tbody>
                </table> :
                (resource === 'species' && !error) ?
                  <table className="table table-hover text-muted">
                    <thead>
                      <tr>
                        <th>{data.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>Classification: {data.classification}</tr>
                      <tr>Designation: {data.designation}</tr>
                      <tr>Average Lifespan: {data.average_lifespan}</tr>
                      <tr>Language: {data.language}</tr>
                    </tbody>
                  </table> :
                  (resource === 'vehicles' && !error) ?
                    <table className="table table-hover text-muted">
                      <tbody>
                        <tr>Name: {data.name}</tr>
                        <tr>Model: {data.model}</tr>
                        <tr>Manufacturer: {data.manufacturer}</tr>
                        <tr>Cost: {data.cost_in_credits}</tr>
                        <tr>Crew: {data.crew}</tr>
                        <tr>Passengers: {data.passengers}</tr>
                        <tr>Cargo: {data.cargo_capacity}</tr>
                        <tr>Consumables: {data.consumables}</tr>
                        <tr>Vehicle Class: {data.vehicle_class}</tr>
                      </tbody>
                    </table> :
                    (resource === 'starships' && !error) ?
                      <table className="table table-hover text-muted">
                        <tbody>
                          <tr>Name: {data.name}</tr>
                          <tr>Model: {data.model}</tr>
                          <tr>Manufacturer: {data.manufacturer}</tr>
                          <tr>Cost: {data.cost_in_credits}</tr>
                          <tr>Crew: {data.crew}</tr>
                          <tr>Passengers: {data.passengers}</tr>
                          <tr>Cargo: {data.cargo_capacity}</tr>
                          <tr>Consumables: {data.consumables}</tr>
                          <tr>Starship Class: {data.starship_class}</tr>
                        </tbody>
                      </table> :
                      <></>
      }
      {error && <img src={error} alt="These are not the droids you're looking for"></img>}
    </div>
  )
}

export default Display
