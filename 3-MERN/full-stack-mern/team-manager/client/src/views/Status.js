/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { pink } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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

const label = { inputProps: { 'aria-label': 'Checkbox' } };

export default () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [updateStatus, setUpdateStatus] = useState();
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState([]);
  const { id } = useParams();

  const apiURL = 'http://localhost:8000/api/players';
  const updateURL = `http://localhost:8000/api/player/update/${id}`;

  useEffect(() => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data.results);
        setAllPlayers(res.data.results);
      })
      .catch(err => console.log(err));
  }, [updateStatus]);

  const statusHandler = (playerStatus) => {
    console.log(playerStatus);
    axios.put(updateURL, playerStatus) // or (updateURL, {status: playerStatus})
      .then(res => {
        console.log(res.data)
        setUpdateStatus(res.data)
        setChecked(prevState => ((prevState === false ? true : false)))
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
    <div className="card mx-auto bg-transparent p-5 pt-0 d-flex justify-content-center border-0">
      <h4 className="p-4 text-center mb-0">Player Status</h4>
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
              <StyledTableCell align="left">Status</StyledTableCell>
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
                    <StyledTableCell align="center">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="Playing"
                          control={
                            <Checkbox
                              {...label}
                              sx={{
                                color: green[500],
                                '&.Mui-checked': {
                                  color: green[500],
                                },
                              }}
                            />
                          }
                          label="Playing"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="Not Playing"
                          control={
                            <Checkbox
                              {...label}
                              sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                  color: pink[600],
                                },
                              }}
                            />
                          }
                          label="Not Playing"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="Undecided"
                          control={
                            <Checkbox
                              {...label}
                              defaultChecked
                              color="default"
                            />
                          }
                          label="Undecided"
                          labelPlacement="end"
                        />
                      </FormGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <div className="d-flex align-items-center justify-content-center gap-4 mt-4">
        <Link to={'/'} className="btn btn-info mt-3 px-5 fw-bold text-white">
          Return to Player Roster
        </Link>
      </div>
    </div>
  )
}
