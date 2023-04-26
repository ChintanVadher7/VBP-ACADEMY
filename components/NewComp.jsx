import React from 'react'
import { getStoryblokApi } from "@storyblok/react"

const NewComp = (props) => {
    console.log(props)
    return (
        <div>NewComp</div>
    )
}

export default NewComp

export async function getStaticProps() {
    let slug = "header";

    let sbParams = {
        version: "published", // or 'published'
    };

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

    return {
        props: {
            story: data ? data.story : false,
            key: data ? data.story.id : false,
        },
    };
}