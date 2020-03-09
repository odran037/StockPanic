import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Header() {
  return (
    <Jumbotron className="mt-4 p-4">
      <h1>
        <span className="font-weight-bold font-italic text-warning">|||||</span>
        <span className="font-weight-bold font-italic text-danger">StockPanic</span>
        <hr className="border-dark" />
      </h1>
      <p className="font-italic h5 text-right">Get in the zone! The StockPanic zone!</p>
    </Jumbotron>
  );
}

export default Header;
