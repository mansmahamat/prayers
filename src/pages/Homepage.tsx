import React from 'react';
import { useGetPrayers } from '../Hooks/API/usePrayers';
import moment from 'moment';
import { useGetDate } from '../Hooks/API/useDates';

type Props = {
  longitude: Number;
  latitude: Number;
};

function Homepage({ longitude, latitude }: Props) {
  const today = moment().format('DD-MM-YYYY');
  const prayers = useGetPrayers(longitude, latitude);
  const dates = useGetDate(today);

  return (
    <div className="container mx-auto h-screen">
      <p>
        {dates?.data?.data?.hijri?.day}{' '}
        <span className="ml-2">{dates?.data?.data?.hijri?.month?.en} </span>
        {dates?.data?.data?.hijri?.year}
      </p>
      <p>{today}</p>

      <ul>
        <li>Asr : {prayers?.data?.results.datetime[0].times.Fajr}</li>
        <li>Asr : {prayers?.data?.results.datetime[0].times.Dhuhr}</li>
        <li>Asr : {prayers?.data?.results.datetime[0].times.Asr}</li>
        <li>Asr : {prayers?.data?.results.datetime[0].times.Maghrib}</li>
        <li>Asr : {prayers?.data?.results.datetime[0].times.Isha}</li>
      </ul>
      <p>{today}</p>
    </div>
  );
}

export default Homepage;
