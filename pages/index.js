import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import memeStyles from '../styles/Meme.module.css'
import { Container, Row, Col, Navbar } from 'react-bootstrap';

export default function Home() {
  return (  
    <> 
      <Container>
        <Row>
          <Head>
            <title>home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Col className="text-center">
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur .
            </p> 
          </Col>
        </Row>
      </Container>  
    </>
  )
}
