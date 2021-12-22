import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Homepage from './pages/Homepage';

function App() {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App container w-full h-full">
      {loading ? (
        <section className="font-medium h-screen rounded-b-10xl py-24 2xl:pt-52 2xl:pb-40">
          <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-green-400 h-12 w-12 mb-4"></div>
            <h2 className="text-center  text-xl font-semibold">Loading...</h2>
            <p className="w-1/3 text-center ">
              This may take a few seconds, please dont close this page.
            </p>
          </div>
        </section>
      ) : (
        <>
          {latitude && (
            <>
              <Navbar />
              <Homepage latitude={latitude} longitude={longitude} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
