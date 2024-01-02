import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/Nav'

export default function Home() {
  return (
  <>
  <head>
    <title>FitMateAI | Home</title>
  </head>
    <div style={{
      zIndex: -1,
      position: "fixed",
      width: "100vw",
      minHeight: "100vh"
    }}>
      <Image
      src="/bg2.svg"
      alt='bg'
      layout='fill'
      objectFit='cover'
      />
    </div>
    <Nav />
    {/* <h1 className={`title-medium ${styles.title}`}>FitMateAI</h1> */}
  </>
  )
}
