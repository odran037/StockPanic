
import React, {useState, useEffect} from 'react';
import BarChart from './BarChart';
import { SOCKET_URL } from '../utils';


function ChartIndex(props) {
  const initialValue = JSON.parse(localStorage.getItem('stocks')).map((stock, i) => {
    return {x: stock.ticker, y: ((i + 1) * 100)}
  });

  console.log("initialValue", initialValue);
  const socket = new WebSocket(SOCKET_URL);
  const [chartData, setChartData] = useState(initialValue);

  socket.addEventListener('open', function(event) {
    let myStocklist = JSON.parse(localStorage.getItem('stocks'));  
    myStocklist.forEach((stock) => {
      socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': stock.ticker }))
    });
  });

  socket.addEventListener('message', function(event) {
    try {
      let { s, p } = JSON.parse(event.data).data[0];

      let updatedChartData = chartData.map((stock) => {
        if (stock.x === s) {
          stock.y = p;
        } else {
          stock[s] = p
        }
        return stock;
      });
      setChartData(updatedChartData);
    }
    catch (err) {
      console.error(`There was an error with the websocket data`, err);
    }
  });

  useEffect(() => {
    if (props.newStock) {
      socket.send(JSON.stringify({
        'type': 'subscribe',
        'symbol': props.newStock.ticker
      }));
    }
  }, [socket, props]);

  if (!chartData) {
    return <div>Loading...</div>
  }
  return (
    <BarChart data={chartData} />
  );
}

export default ChartIndex;
