import React, { useState } from 'react';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField } from '@material-ui/core';
import ColorSelector from '../ColorSelector';
import dayjs from 'dayjs';
import useStyles from './styles';

function CreateReminderModal(props) {
  const { open, handleClose, onCreate } = props;
  const classes = useStyles();

  const [name, setName] = useState("");
  const [color, setColor] = useState('#ef476f');
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [time, setTime] = useState(dayjs().format('HH:mm'));
  const [city, setCity] = useState("");

  const createReminder = () => {
    let data = {
      name,
      color,
      date,
      time,
      city
    };

    onCreate(data);
  }

  return (
    <Dialog
      maxWidth={false}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{ paper: classes.dialog }}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
    >
      <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
        <span>Create a Reminder</span>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <TextField
          label={'Name'}
          inputProps={{
            maxLength: 30,
          }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={classes.input}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <Container className={classes.countContainer}>
                {30 - name.length}
              </Container>
            </InputAdornment>
          }}
        />

        <TextField
          label={'City'}
          inputProps={{
            maxLength: 50,
          }}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className={classes.input}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <Container className={classes.countContainer}>
                {50 - city.length}
              </Container>
            </InputAdornment>
          }}
        />

        <Box mt={'32px'} mb={'16px'} display='flex' flexDirection='row'>
          <span>Color</span>
          <ColorSelector color={'#ef476f'} selected={color === '#ef476f'} onClick={(e) => { e.preventDefault(); setColor('#ef476f'); }} />
          <ColorSelector color={'#ffd166'} selected={color === '#ffd166'} onClick={(e) => { e.preventDefault(); setColor('#ffd166'); }} />
          <ColorSelector color={'#06d6a0'} selected={color === '#06d6a0'} onClick={(e) => { e.preventDefault(); setColor('#06d6a0'); }} />
          <ColorSelector color={'#118ab2'} selected={color === '#118ab2'} onClick={(e) => { e.preventDefault(); setColor('#118ab2'); }} />
          <ColorSelector color={'#073b4c'} selected={color === '#073b4c'} onClick={(e) => { e.preventDefault(); setColor('#073b4c'); }} />
        </Box>

        <TextField
          id="date"
          label="Date"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className={classes.input}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="time"
          label="Time"
          type="time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          className={classes.input}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button onClick={handleClose} color="inherit">
          Cancel
        </Button>
        <Button variant="outlined" disabled={!(name && color && date && time && city)} onClick={createReminder}>
          Create
        </Button>
      </DialogActions>
    </Dialog >
  );
}

export default CreateReminderModal;