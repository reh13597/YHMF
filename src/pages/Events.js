import React from 'react';
import Header from '../components/Header';
import PictureBlock from '../components/PictureBlock';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import event1 from '../assets/event1.jpeg';
import event2 from '../assets/event2.1.jpg';
import event3 from '../assets/event3.1.jpg';
import event4 from '../assets/event4.jpg';

const Events = () => {
  return (
    <Stack align="center" spacing={20}>
      <Header title="UPCOMING AND PAST EVENTS!"/>
      <PictureBlock
        title="Summer Bubble Tea and Freezie Sale"
        text="08/01/20222"
        image={event4}
      />
      <PictureBlock
        title="Youth Music Night"
        text="06/22/2022"
        image={event3}
      />
      <PictureBlock
        title="Mother's Day Flower Sale"
        text="05/07/2022"
        image={event2}
      />
      <PictureBlock
        title="Donut and Bubble Tea Sale"
        text="04/23/2022"
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