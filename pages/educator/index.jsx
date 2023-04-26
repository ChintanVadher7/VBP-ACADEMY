import React from 'react'
import StoryblokClient from 'storyblok-js-client'

const Index = (props) => {
  return (
    <div>Index</div>
  )
}

export default Index

export async function getStaticProps(contex) {
  const client = new StoryblokClient({
    accessToken: 'QkZRIJv3MRuojAxz4rMUBwtt',
  })

  const data = await client.get(`cdn/stories/deshauwn-slusher`, {
    version: 'published', // Use the latest version of the content
  })
  return {
    props: {
      story: data,
    },
  }
}