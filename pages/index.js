import React from 'react'
import StoryblokClient from 'storyblok-js-client'
import LandingPage from '@/components/LandingPage';
import FindEducators from '@/components/Educators';


const index = (props) => {
  console.log(props);
  return (
    <div>
      <LandingPage data={props.story[1]} />
      <FindEducators data={props.story[0]} />
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
