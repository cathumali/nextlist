import React from 'react';
import { connect } from 'react-redux';
import { fetchAllJobs } from '../redux/actions/jobActions';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser';

class Jobs extends React.Component {

  static getInitialProps({store}) {}

  componentDidMount = () => {
    this.props.fetchAllJobs()
  }

  constructor(props) {
      super(props);
  }

  render() {
    console.log(this.props);
    const jobList = this.props.jobs.data;
    return (
      <div className={styles.container}>
        <Head>
          <title>Job Openings</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}> 

          <div className="content-wrapper"s>
              <div className="content-header">
                <div className="container">
                  <div className="row mb-2">
                    <div className="col-sm-12">
                      <h1 className="m-0 text-dark float-left"> Open Positions</h1>
                    </div>  
                  </div> 
                </div> 
              </div> 
              
              <div className="content">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      { this.props.loading_jobs && <h5>Loading...</h5> }
                      { Boolean(jobList?.length) && jobList.map( (job,key) => {
                        return (
                          <div className="card mb-4" key={key}>
                            <div className="card-body">
                              <h5 className="card-title">{ job.title }</h5>

                              <div className="card-text">
                                { ReactHtmlParser(job.description) }
                              </div>


                            </div>
                          </div>
                        );
                      })}
 
                    </div>  
                    
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
  loading_jobs: state.jobs.loading,
  jobs: state.jobs,
  memes: state.memes
});

const mapDispatchToProps = {
    fetchAllJobs : fetchAllJobs,
};
export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

