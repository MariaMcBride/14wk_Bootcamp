/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

export default (props) => {
  const { player, playerId, successCallback, classMods } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deletePlayer = (e) => {
    axios.delete('http://localhost:8000/api/player/delete/' + playerId)
      .then(res => {
        successCallback();
      })
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className={`btn-danger ${classMods}`}>
        Delete
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Are you sure you want to remove {player}?
            </Typography>
            <Typography id="transition-modal-description"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 5,
                mt: 3,
              }}>
              <button
                onClick={deletePlayer}
                className={`btn-danger ${classMods}`}>
                Yes
              </button>
              <button
                onClick={handleClose}
                className={`btn-secondary ${classMods}`}>
                No
              </button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

