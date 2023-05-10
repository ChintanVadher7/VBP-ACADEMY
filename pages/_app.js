import Layout from '@/components/Layout';
import '@/styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import "/styles/globals.css";

import { ThemeProvider } from "@material-tailwind/react";
storyblokInit({
  accessToken: "QkZRIJv3MRuojAxz4rMUBwtt",
  use: [apiPlugin]
});
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
