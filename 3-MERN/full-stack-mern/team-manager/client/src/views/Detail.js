/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper';

export default (props) => {
  const [player, setPlayer] = useState({});
  const { id } = useParams();
  const { playerStatus } = props;
  const history = useHistory();

  const apiURL = `http://localhost:8000/api/player/${id}`;
  const deleteURL = `http://localhost:8000/api/player/delete/${id}`;

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setPlayer(res.data.results)
        history.push(`/${id}`)
      })
      .catch(err => console.log(err));
  }, [apiURL, history, id]);

  const deletePlayer = () => {
    axios.delete(deleteURL)
      .then(res => {
        console.log(res);
        history.push('/')
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="text-center my-auto">
      <h4 className="p-4 text-center mb-0">Manage Player</h4>
      {
        player ? (
          <>
            <Card
              component={Paper}
              variant="outlined"
              sx={{
                width: 400,
                m: 'auto',
                p: 5
              }}
            >
              <h5 className="mb-3">{player.name}</h5>
              <p className="mx-auto mb-4"><strong>Position:</strong> {player.position}</p>
              <p className="mx-auto mb-4"><strong>Status:</strong> {playerStatus}</p>
              <div className="d-flex justify-content-center align-items-center gap-4">
                <Link to={'/'} className="btn btn-success mt-3 px-4 fw-bold text-white">
                  Home
                </Link>
                <Link to={`/update/${player._id}`} className="btn btn-warning mt-3 px-4 fw-bold text-white">
                  Edit
                </Link>
                <DeleteButton
                  playerId={player._id}
                  playerName={player.name}
                  successCallback={() =>
                    deletePlayer(player._id)}
                  buttonValue="Delete"
                  classMods="btn mt-3 px-4 fw-bold text-white" />
              </div>
            </Card>
          </>
        ) : <h3 className="text-center">Loading...</h3>
      }
    </div>
  )
}