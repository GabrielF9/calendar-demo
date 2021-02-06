import axios from "axios";
import React, { useState } from "react";
import CreateReminderModal from "../../components/CreateReminderModal";
import Calendar from "./Calendar";
import Schedule from "./Schedule";
import { Container } from "./styles";

function Home() {
  const [actualDate, setActualDate] = useState(new Date());
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [reminderEdit, setReminderEdit] = useState(null);

  const createNewReminder = () => {
    setOpenCreateModal(true);
  }

  const openEditReminder = (id) => {
    let _reminders = localStorage.getItem('reminders') ? JSON.parse(localStorage.getItem('reminders')) : [];
    const _id = _reminders.findIndex(reminder => reminder.id === id);
    const _reminder = _reminders[_id];

    setReminderEdit(_reminder);
    setOpenCreateModal(true);
  }

  const handleCloseCreateModal = () => {
    setReminderEdit(null);
    setOpenCreateModal(false);
  }

  const createReminder = (data) => {
    axios.get(process.env.REACT_APP_WEATHER_API_URL, {
      params: {
        query: data.city,
        access_key: process.env.REACT_APP_WEATHER_API_KEY
      }
    }).then(res => {
      data.weather = res.data.current.weather_icons[0];

      let reminders = localStorage.getItem('reminders') ? JSON.parse(localStorage.getItem('reminders')) : [];
      console.log(reminders);

      reminders.push(data);

      localStorage.setItem('reminders', JSON.stringify(reminders));

      handleCloseCreateModal();
      setUpdate(true);
    }).catch(err => {
      let reminders = localStorage.getItem('reminders') ? JSON.parse(localStorage.getItem('reminders')) : [];
      console.log(reminders);

      reminders.push(data);

      localStorage.setItem('reminders', JSON.stringify(reminders));

      handleCloseCreateModal();
      setUpdate(true);
    });
  }

  const editReminder = (data) => {
    axios.get(process.env.REACT_APP_WEATHER_API_URL, {
      params: {
        query: data.city,
        access_key: process.env.REACT_APP_WEATHER_API_KEY
      }
    }).then(res => {
      data.weather = res.data.current.weather_icons[0];

      let _reminders = localStorage.getItem('reminders') ? JSON.parse(localStorage.getItem('reminders')) : [];
      const _id = _reminders.findIndex(reminder => reminder.id === data.id);
      _reminders[_id] = data;

      localStorage.setItem('reminders', JSON.stringify(_reminders));

      handleCloseCreateModal();
      setUpdate(true);
    }).catch(err => {
      let _reminders = localStorage.getItem('reminders') ? JSON.parse(localStorage.getItem('reminders')) : [];
      const _id = _reminders.findIndex(reminder => reminder.id === data.id);
      _reminders[_id] = data;

      localStorage.setItem('reminders', JSON.stringify(_reminders));

      handleCloseCreateModal();
      setUpdate(true);
    });
  }

  const deleteReminder = (id) => {
    let _reminders = localStorage.getItem('reminders') ? JSON.parse(localStorage.getItem('reminders')) : [];
    const _id = _reminders.findIndex(reminder => reminder.id === id);
    _reminders.splice(_id);

    localStorage.setItem('reminders', JSON.stringify(_reminders));

    handleCloseCreateModal();
    setUpdate(true);
  }

  return (
    <Container>
      <Calendar actualDate={actualDate} setActualDate={setActualDate} />
      <Schedule actualDate={actualDate} createNewReminder={createNewReminder} update={update} setUpdate={setUpdate} editReminder={openEditReminder} />
      {openCreateModal && <CreateReminderModal
        open={openCreateModal}
        handleClose={handleCloseCreateModal}
        reminderEdit={reminderEdit}
        onCreate={createReminder}
        onEdit={editReminder}
        onDelete={deleteReminder}
      />
      }
    </Container>
  );
}

export default Home;