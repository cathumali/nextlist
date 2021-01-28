import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMemes } from '../redux/actions/memeActions';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser';

class Memes extends React.Component {

  static getInitialProps({store}) {}

  componentDidMount = () => {
    this.props.fetchAllMemes()
  }

  constructor(props) {
      super(props);
  }

  render() {
    const allMemes = this.props.memes;
    console.log(allMemes);
    return (
      <div className={styles.container}>
        <Head>
          <title>Memes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}> 

          <div className="content-wrapper"s>
              <div className="content-header">
                <div className="container">
                  <div className="row mb-2">
                    <div className="col-sm-12">
                      <h1 className="m-0 text-dark float-left"> Pick your memes</h1>
                    </div>  
                  </div> 
                </div> 
              </div> 
              
              <div className="content">
                <div className="container">
                  <div className="row">
                      { this.props.loading_memes && <h5>Loading...</h5> }
                      { Boolean(allMemes?.length) && allMemes.map( (meme,key) => {
                        return (
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={key}>
                            <div className="card mb-4">
                              <img class="card-img-top" src={ meme.url } alt="Card image"></img>
                              <div className="card-body">
                                <h5 className="card-title">{ meme.name }</h5> 

                              </div>
                            </div>
                          </div>                      
                        );
                      })} 
                  </div> 
                </div> 
              </div> 
            </div> 

        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading_memes: state.memes.loading,
  memes: state.memes.data.memes
});

const mapDispatchToProps = {
  fetchAllMemes : fetchAllMemes,
};
export default connect(mapStateToProps, mapDispatchToProps)(Memes);

