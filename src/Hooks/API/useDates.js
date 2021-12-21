import axios from 'axios';
import { useQuery } from 'react-query';

const getDate = async (date) => {
  const { data } = await axios.get(`http://api.aladhan.com/v1/gToH?date=${date}`);

  return data;
};

export function useGetDate(date) {
  return useQuery(['getDate'], () => getDate(date));
}
