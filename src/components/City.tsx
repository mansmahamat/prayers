/* eslint-disable no-undef */
import React, { useState } from 'react';
import Translate from './Translate';
//@ts-ignore
import AlgoliaPlaces from 'algolia-places-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function City() {
  // eslint-disable-next-line no-unused-vars
  const [modal, setModal] = useState(true);
  const [city, setCity] = useState();

  const { t, i18n } = useTranslation();

  return (
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        className="fixed inset-0 bg-gray-400 bg-opacity-80  transition-opacity"
        aria-hidden="true"></div>

      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        &#8203;
      </span>

      <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex justify-center sm:items-start">
            <Translate />
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <section className="font-medium rounded-b-10xl ">
                <div className=" top-0 left-0 right-0 bottom-0 z-50 h-72 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
                  <h1 className="mb-4">
                    <strong>{t('splashscreen.title.ask.city')}</strong>
                  </h1>
                  {/* @ts-ignore */}

                  <AlgoliaPlaces
                    placeholder="Write an address here"
                    options={{
                      appId: process.env.REACT_APP_APPLICATION_ID,
                      apiKey: process.env.REACT_APP_API_KEY,
                      type: 'city',
                      language: i18n.language
                      // Other options from https://community.algolia.com/places/documentation.html#options
                    }}
                    //@ts-ignore
                    onChange={(suggestion) => setCity(suggestion.suggestion)}
                  />
                  {/* <Link to="/" onChange={() => setLoading(false)} type="button">
              ooooo
            </Link> */}
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => {
              localStorage.setItem('city', JSON.stringify(city));
              setModal(false);
            }}>
            Validate
          </button>

          {city && (
            <Link
              to="/prayers"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setModal(false)}>
              voir
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default City;
