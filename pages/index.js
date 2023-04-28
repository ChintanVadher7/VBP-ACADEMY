import React from 'react'
import StoryblokClient from 'storyblok-js-client'
import LandingPage from '@/components/LandingPage';
import Educators from '@/components/Educators';
import Calender from '@/components/Calender';


const index = (props) => {
  return (
    <div>
      <LandingPage data={props.data2.data.story} />
      <Educators data={props.story.data.story} />
      <Calender />
    </div>
  )
}

export default index

export async function getStaticProps() {
  // Initialize the Storyblok client
  const client = new StoryblokClient({
    accessToken: 'QkZRIJv3MRuojAxz4rMUBwtt',
  })

  // Fetch the data from Storyblok
  const data = await client.get('cdn/stories/educators', {
    version: 'published', // Use the latest version of the content
  })
  const data2 = await client.get('cdn/stories/landing-page', {
    version: 'published', // Use the latest version of the content
  })

  // Return the data as props
  return {
    props: {
      story: data, data2
    },
  }
}
