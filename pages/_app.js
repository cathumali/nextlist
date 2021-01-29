import React from 'react';
import {Provider} from 'react-redux';
import App from 'next/app';
import store from '../redux/store';
import withRedux, { createWrapper } from 'next-redux-wrapper' 
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    // ctx.store.dispatch({type: 'FOO', payload: 'foo'});
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return {pageProps: pageProps};
  }

  render() {
    //Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
          <NavBar />
          <Component {...pageProps}/>
          <Footer />
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store; 

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);



// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
// export default MyApp