import React from 'react';
import Header from '../components/Header';
import EventBlock from '../components/EventBlock';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import event1 from '../assets/yhmflogo.png';

const Events = () => {
  return (
    <Stack align="center" spacing={20}>
      <Header title="UPCOMING AND PAST EVENTS!"/>
      <EventBlock 
        title="Krispy Kreme Donut Sale"
        text="wcnmb"
        image={event1}
      />
      <EventBlock 
        title="Krispy Kreme Donut Sale"
        text="wcnmb"
        image={event1}
      />
      <EventBlock 
        title="Krispy Kreme Donut Sale"
        text="wcnmb"
        image={event1}
      />
      <EventBlock 
        title="Krispy Kreme Donut Sale"
        text="wcnmb"
        image={event1}
      />
      <Stack align="center">
        <Newsletter/>
        <Footer/>
      </Stack>
    </Stack>
  );
}

export default Events;