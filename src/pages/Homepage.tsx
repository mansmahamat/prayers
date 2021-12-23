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
  const now = moment().format('HH:mm');
  const times = [
    { time: prayers?.data?.results?.datetime[0]?.times?.Fajr, name: 'Fajr' },
    { time: prayers?.data?.results?.datetime[0]?.times?.Dhuhr, name: 'Fajr' },
    { time: prayers?.data?.results?.datetime[0]?.times?.Asr, name: 'Fajr' }
  ];

  const timesInMillis = times?.map((t) => moment(t.time, 'HH:mm'));

  console.log(timesInMillis);

  //@ts-ignore
  function closestTime(arr, time) {
    //@ts-ignore
    return arr.reduce(function (prev, curr) {
      return curr - time < prev - time ? curr : prev;
    });
  }

  const closest = moment(closestTime(timesInMillis, now)).format('HH:mm');

  console.log(closest);

  return (
    <div className="container mx-auto h-screen">
      <p>
        {dates?.data?.data?.hijri?.day}{' '}
        <span className="ml-2">{dates?.data?.data?.hijri?.month?.en} </span>
        {dates?.data?.data?.hijri?.year}
      </p>

      {Object.entries(prayers?.data?.results.datetime[0].times).map(([key, value]) => {
        if (closest === value)
          return (
            <div key={key}>
              Next prayers is {key} : {value}
            </div>
          );
      })}

      <p>{today}</p>
    </div>
  );
}

export default Homepage;
