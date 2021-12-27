import axios from 'axios';
import { useQuery } from 'react-query';

const getPrayers = async (longitude, latitude) => {
  const { data } = await axios.get(
    `https://api.pray.zone/v2/times/today.json?longitude=${longitude}&latitude=${latitude}&elevation=333&school=1`
  );

  return data;
};

export function useGetPrayers(longitude, latitude) {
  return useQuery(['getPrayers'], () => getPrayers(longitude, latitude));
}

const getWeekPrayers = async (longitude, latitude) => {
  const { data } = await axios.get(
    `https://api.pray.zone/v2/times/this_week.json?longitude=${longitude}&latitude=${latitude}&elevation=333&school=1`
  );

  return data.results.datetime;
};

export function useGetWeekPrayers(longitude, latitude) {
  return useQuery(['getWeekPrayers'], () => getWeekPrayers(longitude, latitude));
}
