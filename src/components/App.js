import { useEffect, useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import Home from './home/Home';

function App() {
  const [page, setPage] = useState('home');
  const [dishes, setDishes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      fetch('./db/db.json')
        .then((res) => res.json())
        .then((data) => {
          setDishes(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, []);

  return (
    <div className="app">
      <Sidebar setPage={setPage} page={page} />

      <Home
        page={page}
        dishes={dishes}
        orders={orders}
        setOrders={setOrders}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
