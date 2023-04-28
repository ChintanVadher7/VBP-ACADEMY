import React from 'react'
import StoryblokClient from 'storyblok-js-client'
import LandingPage from '@/components/LandingPage';
import Educators from '@/components/Educators';
import Calender from '@/components/Calender';


const index = (props) => {
  return (
    <div>
      <LandingPage data={props.story[4]} />
      <Educators data={props.story[2]} />
      <Calender/>
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
  const data = await client.getAll('cdn/stories', {
    version: 'published', // Use the latest version of the content
  })
  // Return the data as props
  return {
    props: {
      story: data,
    },
  }
}
