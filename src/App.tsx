/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
//@ts-ignore
import AlgoliaPlaces from 'algolia-places-react';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Splash from './Splash';
import Translate from './components/Translate';
// import Navbar from './components/Navbar';
import background from './img/pexels-domenico-bandiera-5777141.jpg';
import City from './components/City';
import Navbar from './components/Navbar';

// import Homepage from './pages/Homepage';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  const [modal, setModal] = useState(true);
  const [info, setInfo] = useState(true);
  const [notification, setNotification] = useState<boolean>(false);

  //@ts-ignore
  // const localCity = JSON.parse(localStorage.getItem('city')) || {};
  const [saved, setSaved] = useState('localCity');

  const [city, setCity] = useState();
  const { t, i18n } = useTranslation();

  //@ts-ignore

  //@ts-ignore
  //@ts-ignore

  return (
    <div className="h-full">
      <Navbar notification={notification} setNotification={setNotification} />
      <div className="container mx-auto ">
        <Routes>
          <Route path="/" element={<City />} />

          <Route path="/prayers" element={<Homepage notification={notification} />} />
        </Routes>
      </div>
    </div>
  );
}

export default withTranslation()(App);
