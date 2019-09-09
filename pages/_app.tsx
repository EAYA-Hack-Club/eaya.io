import React from 'react'
import App from 'next/app'
import Head from "next/head";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <style dangerouslySetInnerHTML={{__html: `
            body {
              font-family: "Cabin", sans-serif;
              background-color: rgb(206, 41, 60);
              background-image: linear-gradient(#FB40FF, #563AE8);
              background-size: 100vw 100vh;
              background-attachment: fixed;

              font-weight: 400;
            }
        `}}/>
      </Head>
      <Component {...pageProps} />
    </>;
  }
}

export default MyApp