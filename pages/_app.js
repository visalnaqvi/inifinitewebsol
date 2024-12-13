import NavBar from "@/components/navbar/navbar"
import "../styles/globals.css"
import QuickContacts from "@/components/contactBox/quickContact/quickContact"
import ContactBox from "@/components/contactBox/contactBox/contactBox"
import { SessionProvider } from "next-auth/react"
import Head from "next/head.js"
import Script from "next/script"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const noAuthRoutes = ['/welcome', '/newLogin', '/register'];
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
      <link rel="icon" href="/favicon.png" />
     
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11324889747"></Script>
<Script id="analytics">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11324889747');`}
</Script>
<Script id="tag">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EFY1G1JC42');
`}
</Script>
    <NavBar />
    <main>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
    <ContactBox />
    <QuickContacts />
    </SessionProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // Determine if authentication is required based on the page's path
  const { asPath } = ctx;

  const isAuthRequired = !noAuthRoutes.includes(asPath);

  // Call the page's `getInitialProps` function if it exists
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps, isAuthRequired };
};
export default MyApp