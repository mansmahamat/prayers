import axios from 'axios';
import { useQuery } from 'react-query';

const getPrayers = async (longitude, latitude) => {
  const { data } = await axios.get(
    `https://api.pray.zone/v2/times/today.json?longitude=${longitude}&latitude=${latitude}&elevation=333`
  );

  return data;
};

export function useGetPrayers(longitude, latitude) {
  return useQuery(['getPrayers'], () => getPrayers(longitude, latitude));
}
