import Layout from '@/components/Layout';
import '@/styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "QkZRIJv3MRuojAxz4rMUBwtt",
  use: [apiPlugin]
});
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
