import { React, lazy, useEffect, useState } from 'react';
import './App.css';
import PuffLoader from "react-spinners/PuffLoader";

const Portfolio = lazy(() => import('./Component/Portfolio'))
const App = () => {
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2300);
  }, [])

  return (
    <div>
      {
        loading ?
          <div className='flex justify-center items-center m-auto h-[100vh]'>
            <PuffLoader
              color={'rgb(49, 192, 211)'}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          : <Portfolio />
      }

    </div>
  );
}

export default App;
