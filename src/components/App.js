import { useEffect, useState } from 'react';
import Sidebar from './sidebar/Sidebar';

function App() {
  const [page, setPage] = useState('');

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="app">
      <Sidebar setPage={setPage} page={page} />
    </div>
  );
}

export default App;
