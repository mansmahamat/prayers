/* eslint-disable no-undef */
import React, { useState } from 'react';
//@ts-ignore
import AlgoliaPlaces from 'algolia-places-react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
// import Navbar from './components/Navbar';

// import Homepage from './pages/Homepage';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  const [city, setCity] = useState<object>({});
  const { t } = useTranslation();

  console.log(city);

  return (
    <div className="App container w-full h-full">
      {loading ? (
        <section className="font-medium h-full rounded-b-10xl py-24 2xl:pt-52 2xl:pb-40">
          <div className=" top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
            <h1>
              <strong>{t('splashscreen.title.ask.city')}</strong>
            </h1>

            <AlgoliaPlaces
              placeholder="Write an address here"
              options={{
                appId: process.env.REACT_APP_APPLICATION_ID,
                apiKey: process.env.REACT_APP_API_KEY,
                type: 'city'
                // Other options from https://community.algolia.com/places/documentation.html#options
              }}
              //@ts-ignore
              onChange={(suggestion) => setCity(suggestion.suggestion)}
            />
          </div>
        </section>
      ) : (
        <>
          {/* {latitude && (
            <>
              <Navbar />
              <Homepage latitude={latitude} longitude={longitude} />
            </>
          )} */}
        </>
      )}
    </div>
  );
}

export default withTranslation()(App);
