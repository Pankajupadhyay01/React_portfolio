import { React, lazy,useEffect, useState } from 'react';
import './App.css';
import PuffLoader from "react-spinners/PuffLoader";
import Excards from './Component/Excards';
const Portfolio = lazy(() => import('./Component/Portfolio'))
const App = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2500);
  }, [])

  return (
    <div>
      {
        loading ?
          <div className='flex justify-center items-center m-auto h-[100vh] bg-blue-50'>
            <PuffLoader
              color={'#ebad00'}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <Portfolio />

      }

    </div>
  );
}

export default App;
