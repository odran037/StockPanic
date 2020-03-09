import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';
import { Container } from 'react-bootstrap';


ReactDOM.render(
  <Container>
    <Header />
    <Main />
    <Footer />
  </Container>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
