import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>gildenilson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Seja bem vindo!" />
        <p className="description">
          Acesse o material aqui: <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
