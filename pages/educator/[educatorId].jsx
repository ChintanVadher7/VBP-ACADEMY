import { useRouter } from 'next/router'
import React from 'react'
import StoryblokClient from 'storyblok-js-client'

const Educator = (props) => {
    console.log(props)
    return (
        <div>eqe</div>
    )
}

export default Educator

export async function getStaticPaths() {
    const client = new StoryblokClient({
        accessToken: 'QkZRIJv3MRuojAxz4rMUBwtt',
    })

    const data = await client.getAll('cdn/stories', {
        version: 'published',
    })
    const paths = data.map((res) => ({
        params: {
            educatorId: res.slug,
          },
    }))
    console.log(paths);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const client = new StoryblokClient({
        accessToken: 'QkZRIJv3MRuojAxz4rMUBwtt',
    })

    const { data } = await client.get(`cdn/stories/${params.educatorId}`, {
        version: 'published',
    })

    return {
        props: {
            story: data.story,
        },
    }
}
