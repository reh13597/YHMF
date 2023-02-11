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
import event5 from '../assets/event5.JPG'
import event6 from '../assets/event6.JPG'
import event7 from '../assets/event7.JPG'

const Events = () => {
  return (
    <Stack align="center" spacing={20}>
      <Header title="UPCOMING AND PAST EVENTS!"/>

      <PictureBlock
        title="Community Food Drive"
        text="02/18/2023 - 02/20/2023"
        image={event7}
      />

      <PictureBlock
        title="Bubble Tea Fundraiser w/ AAA"
        text="11/23/2022"
        image={event6}
      />

      <PictureBlock
        title="Krispy Kreme Donut Sale"
        text="09/24/2022"
        image={event5}
      />

      <PictureBlock
        title="Summer Bubble Tea and Freezie Sale"
        text="08/01/2022"
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