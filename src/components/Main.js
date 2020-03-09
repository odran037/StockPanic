import React, { Fragment, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import StockList from './StockList';
import CurrentStock from './CurrentStock';
import Search from './Search';
import ChartIndex from './ChartIndex';
import { getStock } from '../utils';


function Main() {
  const [stockSearch, setStockSearch] = useState('');
  const [stockNotFound, setStockNotFound] = useState('');
  const [newStock, setNewStock] = useState({});
  const [addNewStock, setAddNewStock] = useState({});

  const handleChange = (sym) => {
    setStockSearch(sym.toUpperCase());
  }

  const addToWatchList = () => {
    setAddNewStock(newStock);
  }

  return (
    <Fragment>
      <ChartIndex newStock={null} />
      <Search
        handleChange={handleChange}
        setStockNotFound={setStockNotFound}
        stockNotFound={stockNotFound}
      >
        <Button block onClick={() => {
          getStock(stockSearch, setNewStock, setStockNotFound);
        }}>
          Search
        </Button>
      </Search>
      <Row>
        <Col md="6">
          <CurrentStock newStock={newStock} addToWatchList={addToWatchList} />
        </Col>
        <Col md="6">
          <StockList newStock={addNewStock} />
        </Col>
      </Row>
    </Fragment>
  );
}

export default Main;
