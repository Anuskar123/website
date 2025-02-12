
import { SpeedInsights } from "@vercel/speed-insights/next";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
