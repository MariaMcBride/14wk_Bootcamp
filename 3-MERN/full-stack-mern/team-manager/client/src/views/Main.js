/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default () => {
  const [allPlayers, setAllPlayers] = useState([]);

  const apiURL = 'http://localhost:8000/api/players';

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setAllPlayers(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = (playerId) => {
    setAllPlayers(allPlayers.filter(player => player._id !== playerId))
  }

  return (
    <div className="card mx-auto bg-transparent p-5 pt-0 d-flex justify-content-center border-0">
      <TableContainer
        component={Paper}
        sx={{
          width: 650,
          m: 'auto'
        }}>
        <Table sx={{ width: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Player Name</StyledTableCell>
              <StyledTableCell align="left">Preferred Position</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              allPlayers.map((player, idx) => {
                return (
                  <StyledTableRow key={idx}>
                    <StyledTableCell component="th" scope="row">
                      <Link to=
                        {`/${player._id}`} className="link-info text-decoration-none">
                        {player.name}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">{player.position}</StyledTableCell>
                    <StyledTableCell align="center">
                      <DeleteButton
                        playerId={player._id}
                        playerName={player.name}
                        successCallback={() =>
                          removeFromDom(player._id)}
                        buttonValue="Delete"
                        classMods="btn btn-sm px-3 fw-bold text-white" />
                    </StyledTableCell>
                  </StyledTableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <div className="d-flex align-items-center justify-content-center gap-4 mt-4">
        <Link to={'/new'}
          className="btn btn-primary px-4 fw-bold text-white">
          Add Player
        </Link>
        <Link to={'/status/game/1'}
          className="btn btn-warning px-4 fw-bold text-white">
          Manage Player Status
        </Link>
      </div>
    </div>
  );
}
