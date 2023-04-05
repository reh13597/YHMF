import React from 'react';
import Header from '../components/Header';
import EventBlock from '../components/EventBlock';
import Newsletter from '../components/NewsletterForm';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import event1 from '../assets/events/event1.jpeg';
import event2 from '../assets/events/event2.1.jpg';
import event3 from '../assets/events/event3.1.jpg';
import event4 from '../assets/events/event4.jpg';
import event5 from '../assets/events/event5.JPG'
import event6 from '../assets/events/event6.JPG'
import event7 from '../assets/events/event7.JPG'
import eventsPage from '../assets/eventsPage.png';

const Events = () => {
  return (
    <Stack align="center" spacing={25}>
      <Header image={eventsPage} title="UPCOMING AND PAST EVENTS!"/>

      <EventBlock
        title="Community Food Drive"
        text="02/18/2023 - 02/20/2023"
        image={event7}
      />

      <EventBlock
        title="Bubble Tea Fundraiser w/ AAA"
        text="11/23/2022"
        image={event6}
      />

      <EventBlock
        title="Krispy Kreme Donut Sale"
        text="09/24/2022"
        image={event5}
      />

      <EventBlock
        title="Summer Bubble Tea and Freezie Sale"
        text="08/01/2022"
        image={event4}
      />

      <EventBlock
        title="Youth Music Night"
        text="06/22/2022"
        image={event3}
      />

      <EventBlock
        title="Mother's Day Flower Sale"
        text="05/07/2022"
        image={event2}
      />

      <EventBlock
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