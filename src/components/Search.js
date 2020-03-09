import React from 'react';
import { Badge, Col, Form } from 'react-bootstrap';


function Search(props) {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} xs="10" controlId="formGroupEmail">
          <Form.Control
            type="text"
            placeholder="Enter a stock Symbol eg. AZO"
            onChange={(e) => props.handleChange(e.target.value)}
            onFocus={() => props.setStockNotFound('')}
          />
          <p>
            {props.stockNotFound ?
              (<Badge variant="danger">{props.stockNotFound}</Badge>) :
              (<span>{' '}</span>)}
          </p>
        </Form.Group>
        <Form.Group as={Col} xs="2">
          {props.children}
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default Search;
