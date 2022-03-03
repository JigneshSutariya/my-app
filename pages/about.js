import Head from 'next/head'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>My About</title>
        <meta name="description" content="My first next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}