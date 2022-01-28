/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

export default (props) => {
  const { initialName, initialPosition, onSubmitProp, errors, playerId, buttonStyle } = props;
  const [name, setName] = useState(initialName);
  const [position, setPosition] = useState(initialPosition);
  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name, position });
  }

  const hasInput = name.length !== 0;

  let classMods = "btn m-2 mb-0 fw-bold text-white";
  buttonStyle === "Update" ?
    classMods += "px-3" :
    classMods += "m-3 px-5"

  return (
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
        <Box
          onSubmit={onSubmitHandler}
          component="form"
          noValidate
          sx={{
            textAlign: 'center',
          }}
        >
          {
            errors &&
            errors.map((err, idx) =>
              <p key={idx} className="alert alert-danger">{err}</p>)
          }
          {
            hasInput && name.length < 2 &&
            <p className="alert alert-danger">Name must be at least 2 characters long.</p>
          }
          {
            hasInput && !(/^[a-zA-Z-,.]+(\s{0,1}[a-zA-Z-,. ])*$/.test(name)) &&
            <p className="alert alert-danger">{name} is not a valid name.</p>
          }
          <ValidationTextField
            onChange={(e) => setName(e.target.value)}
            label="Player Name"
            required
            variant="outlined"
            value={name}
            fullWidth
            sx={{
              mb: 3
            }}
          />
          {/* <TextField
            onChange={(e) => setPosition(e.target.value)}
            label="Preferred Position"
            variant="outlined"
            value={position}
            fullWidth
          /> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Preferred Position</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={position}
              label="Preferred Position"
              onChange={(e) => setPosition(e.target.value)}
            >
              <MenuItem value="Setter">Setter</MenuItem>
              <MenuItem value="Outside Hitter">Outside Hitter</MenuItem>
              <MenuItem value="Opposite Hitter">Opposite Hitter</MenuItem>
              <MenuItem value="Middle Blocker">Middle Blocker</MenuItem>
              <MenuItem value="Libero">Libero</MenuItem>
              <MenuItem value="Defensive Specialist">Defensive Specialist</MenuItem>
              <MenuItem value="Serving Specialist">Serving Specialist</MenuItem>
            </Select>
          </FormControl>
          <div className="d-flex justify-content-center mt-3">
            <Link to={'/'}
              className={`btn-secondary ${classMods}`}>
              Cancel
            </Link>
            <input disabled={!hasInput} className={`btn-success ${classMods} text-white`} type="submit" value="Submit"
            />
            {
              playerId !== "" &&
              <DeleteButton playerId={playerId} successCallback={() =>
                history.push('/')} buttonValue="Delete" classMods={classMods} />
            }
          </div>
        </Box>
      </Card>
    </>
  )
}

