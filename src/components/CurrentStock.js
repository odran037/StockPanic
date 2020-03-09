import React, { Fragment, useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { STOCK, PRICES, getStockPrices, parseDetail } from '../utils';


function CurrentStock(props) {
  const [currentDetails, setCurrentDetails] = useState(STOCK[0]);
  const [currentPrices, setCurrentPrices] = useState(PRICES);

  useEffect(() => {
    if (Object.entries(props.newStock).length !== 0) {
      setCurrentDetails(props.newStock);
      getStockPrices(props.newStock.ticker, setCurrentPrices);
    } else {
      getStockPrices(STOCK[0].ticker, setCurrentPrices);
    }
  }, [props]);

  return (
    <Fragment>
      <h5>Current stock</h5>
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>
              <span className="h3">{currentDetails.ticker}</span>&nbsp;
              <small className="h6">{currentDetails.name}</small><br />
              <small className="h6">{currentDetails.exchange}</small>
            </h3>
          </Card.Title>
          <hr />
          {Object.entries(currentPrices).map((data, index) => (
            <Card.Text
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {parseDetail(data)}
            </Card.Text>
          ))}
          <Button block onClick={() => props.addToWatchList()}>Add to watchlist</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default CurrentStock;