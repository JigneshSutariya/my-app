import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Next App</title>
        <meta name="description" content="My first next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}