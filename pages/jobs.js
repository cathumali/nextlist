import React from 'react';
import { connect } from 'react-redux';
import { fetchAllJobs } from '../redux/actions/jobActions';
// import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link'

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
      <Container>
        <Head>
          <title>Job Openings</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Row>
          <Col sm={12}>
            <h1>Openings</h1>
          </Col>
          { this.props.loading_jobs && <h5>Loading...</h5> }            
          <Col sm={12}>
            { Boolean(jobList?.length) && jobList.map( (job,key) => {
              return (
                <Card className="mb-4" key={key}>
                  <Card.Body className="">

                    <Card.Title className="">{ ReactHtmlParser(job.title) }</Card.Title>

                    <Link href={`${job.company_url}`}>
                      <b className="text-muted" style={{cursor:"pointer"}}>{ job.company }</b>
                    </Link>
                    <br />
                    <small className="text-muted" >Posted at: { job.created_at } </small>

                    <Card.Text className="">
                      { ReactHtmlParser(job.description) }
                    </Card.Text>

                    <h4>How to apply:</h4>
                    { ReactHtmlParser(job.how_to_apply) }
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row> 
      </Container> 
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

