import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>About us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <div className="content-wrapper"s>
          <div className="content-header">
            <div className="container">
              <div className="row mb-2">
                <div className="col-sm-12">
                  <h1 className="m-0 text-dark float-left"> About us</h1>
                </div>  
              </div> 
            </div> 
          </div> 
          
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>   
                </div>
              </div> 
            </div> 
          </div> 
        </div> 
    </div>   
  )
}
