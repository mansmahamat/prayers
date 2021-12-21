import React from 'react';
import { useGetPrayers } from '../Hooks/API/usePrayers';

type Props = {
  longitude: Number;
  latitude: Number;
};

function Homepage({ longitude, latitude }: Props) {
  const prayers = useGetPrayers(longitude, latitude);

  console.log(prayers.status);
  return (
    <div className="bg-red-300">
      Tesct s{latitude && <p>Latitude: {latitude}</p>}
      {longitude && <p>Longitude: {longitude}</p>}
    </div>
  );
}

export default Homepage;
