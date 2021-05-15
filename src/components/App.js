import { useEffect, useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import Menu from './home/Menu';

function App() {
  const [page, setPage] = useState('home');
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);

  useEffect(() => {
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
      <Menu page={page} dishes={dishes} isLoading={isLoading} />
    </div>
  );
}

export default App;
