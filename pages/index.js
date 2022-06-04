import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

export default function Home() {
  return (
    <div className='site'>
      <Head>
        <title>Huong Nguyen</title>
        <meta name="description" content="Huong Nguyen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>
        <div className='container'>
          <h1>
            Welcome to my CV
          </h1>
        </div>
      </main>
    </div>
  )
}
