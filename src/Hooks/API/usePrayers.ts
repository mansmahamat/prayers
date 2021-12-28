import axios from 'axios';
import { useQuery } from 'react-query';
import Prayer from '../../types/Prayer';
import PrayerWeek from '../../types/PrayerWeek';

const getPrayers = async (longitude: string, latitude: string): Promise<Prayer> => {
  const { data } = await axios.get<Prayer>(
    `https://api.pray.zone/v2/times/today.json?longitude=${longitude}&latitude=${latitude}&elevation=333&school=1`
  );

  return data;
};

export function useGetPrayers(longitude: string, latitude: string) {
  return useQuery<Prayer, Error>(['getPrayers'], () => getPrayers(longitude, latitude));
}

const getWeekPrayers = async (longitude: string, latitude: string): Promise<PrayerWeek> => {
  const { data } = await axios.get<PrayerWeek>(
    `https://api.pray.zone/v2/times/this_week.json?longitude=${longitude}&latitude=${latitude}&elevation=333&school=1`
  );

  return data;
};

export function useGetWeekPrayers(longitude: string, latitude: string) {
  return useQuery<PrayerWeek, Error>(['getWeekPrayers'], () => getWeekPrayers(longitude, latitude));
}
