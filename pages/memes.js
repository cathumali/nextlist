import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMemes } from '../redux/actions/memeActions';
// import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
      <Container>
        <Head>
          <title>Pick your memes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Row>
          <Col sm={12}>
            <h1>Pick your memes</h1>
          </Col> 
          { this.props.loading_memes && <h5>Loading...</h5> }
          { Boolean(allMemes?.length) && allMemes.map( (meme,key) => {
            return (
              <Col sm={6} md={4} lg={3}  key={key}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={ meme.url } alt="Card image" />
                  <Card.Body >
                    <Card.Title >{ meme.name }</Card.Title> 
                  </Card.Body>
                </Card>
              </Col>                      
            );
          })} 
        </Row> 
       </Container>   
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

