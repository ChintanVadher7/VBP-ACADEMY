import React from 'react'
import StoryblokClient from 'storyblok-js-client'

const Index = (props) => {
  const artistData = [
    {
      Artist1: {
        name: "ART1",
        date: new Date()
      },
      Artist2: {
        name: "ART2",
        date: 21 / 5 / 23
      },
      Artist3: {
        name: "ART3",
        date: 3 / 5 / 23
      }
    }
  ]
  const today = new Date(); // get the current date
  console.log(today.getDate())

  const nearestEvents = [];
  for (const artist of artistData) {
    for (const eventName in artist) {
      const { name, date } = artist[eventName];
      const eventDate = new Date(date);
      if (eventDate > today) {
        nearestEvents.push({ name, date: eventDate });
      }
    }
  }

  nearestEvents.sort((a, b) => a.date - b.date);

  return nearestEvents.length > 0 ? (
    <div>
      <p>Next event:</p>
      <p>{nearestEvents[0].name} - {nearestEvents[0].date.toLocaleDateString()}</p>
    </div>
  ) : (
    <p>No upcoming events.</p>
  );
}

export default Index