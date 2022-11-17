import React from 'react';
import MainPage from './MainPage/MainPage';
import Loading from './Loading/Loading';
import useFalco from './useFalco/useFalco';

function App () {
  const [falco, loading, error] = useFalco();

  return (
    <>
      {loading && <Loading />}
      {!loading && error && <p>ERROR: {error.toString()}</p>}
      {!loading && !error && falco && <MainPage falco={falco}/>}
    </>
  );
}
export default App;