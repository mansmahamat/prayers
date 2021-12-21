import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Homepage from './pages/Homepage';

function App() {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     // @ts-ignore
  //     setStatus('Geolocation is not supported by your browser');
  //   } else {
  //     // @ts-ignore
  //     setStatus('Locating...');
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         // @ts-ignore

  //         setLatitude(position.coords.latitude);
  //         // @ts-ignore

  //         setLongitude(position.coords.longitude);
  //       },
  //       () => {}
  //     );
  //   }
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // @ts-ignore
      setLatitude(position.coords.latitude);
      //@ts-ignore
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <div className="App">
      {latitude & longitude && (
        <>
          <Navbar />
          <Homepage latitude={latitude} longitude={longitude} />
        </>
      )}
    </div>
  );
}

export default App;
