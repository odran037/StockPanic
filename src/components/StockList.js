import React, { Fragment, useState, useEffect } from 'react';
import { Accordion, Button, Card, ListGroup } from 'react-bootstrap';
import { STOCK, PRICES, getStockPrices, parseDetail } from '../utils';


function StockList(props) {
  const initialValue = JSON.parse(localStorage.getItem('stocks')) || [STOCK];
  const [stocksList, setStocksList] = useState(initialValue);
  const [currentPrices, setCurrentPrices] = useState(PRICES);

  const deleteStock = (ticker) => {
    let updatedList = stocksList.filter((stock) => stock.ticker !== ticker);
    setStocksList(updatedList);
    localStorage.setItem('stocks', JSON.stringify(updatedList));
  };

  useEffect(() => {
    if (Object.entries(props.newStock).length !== 0) {
      let stockInList = stocksList.filter((stock) => {
        return stock.ticker === props.newStock.ticker;
      }).length > 0;

      if (!stockInList) {
        setStocksList([
          ...stocksList,
          props.newStock
        ]);
      }
      localStorage.setItem('stocks', JSON.stringify(stocksList));
    }
  }, [props, stocksList]);

  return (
    <Fragment>
      <h5>My stocks</h5>
      <Accordion>
        {stocksList.map((stock, index) => (
          <Card key={`key-${index}`}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey={index}
              onClick={() => getStockPrices(stock.ticker, setCurrentPrices)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h3>
                  <span className="h3">{stock.ticker}</span>&nbsp;
                  <small className="h6">{stock.name}</small><br />
                  <span className="h6">{stock.exchange}</span>
                </h3>
                <div>
                  <Button className="mr-3">Current Prices</Button>
                </div>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <ListGroup>
                  {Object.entries(currentPrices).map((data, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {parseDetail(data)}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Button
                  block
                  variant="danger"
                  size="sm"
                  onClick={() => deleteStock(stock.ticker)}
                >
                  Delete Stock from watchlist
                </Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Fragment>
  );
}

export default StockList;