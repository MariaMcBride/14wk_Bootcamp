/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";

export default () => {
  const { id } = useParams();
  const history = useHistory();
  const [player, setPlayer] = useState();
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const apiURL = `http://localhost:8000/api/player/${id}`;
  const updateURL = `http://localhost:8000/api/player/update/${id}`;

  console.log(id);

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data);
        setPlayer(res.data.results);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const updatePlayer = (editPlayer) => {
    console.log(editPlayer);
    axios.put(updateURL, editPlayer)
      .then(res => {
        console.log(res)
        history.push('/')
      })
      .catch(err => {
        console.log(err.response);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }

  return (
    <div>
      <h3 className="p-4 text-center mb-0">Edit this Player</h3>
      {
        loaded && <>
          <Form
            onSubmitProp={updatePlayer}
            initialName={player.name}
            initialPosition={player.position}
            playerId={player._id}
            buttonStyle="Update"
            errors={errors} />
        </>
      }
    </div>
  )
}