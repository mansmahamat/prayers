/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useGetPrayers, useGetWeekPrayers } from '../Hooks/API/usePrayers';
import moment, { Moment } from 'moment';
import { useGetDate } from '../Hooks/API/useDates';
import backgroundMosque from '../img/mosque.jpg';
import {
  WiSunrise,
  WiSunset,
  WiMoonWaxingCrescent4,
  WiDaySunny,
  WiDayCloudy
} from 'react-icons/wi';
import NextPrayer from '../container/NextPrayer';
import Table from '../components/Table';

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

interface Notifications {
  notification: boolean;
}

function Homepage({ notification }: Notifications) {
  const today: string = moment().format('DD-MM-YYYY');

  //@ts-ignore
  const localCity = JSON.parse(localStorage.getItem('city')) || {};
  const prayers = useGetPrayers(localCity?.latlng?.lng, localCity.latlng.lat);
  const { data: weekPrayers } = useGetWeekPrayers(localCity?.latlng?.lng, localCity.latlng.lat);
  const dates = useGetDate(today);

  useEffect(() => {
    //@ts-ignore
    JSON.parse(localStorage.getItem('city'));
  }, [localCity]);

  const now = moment().format('HH:mm');
  const times = [
    {
      time: prayers?.data?.results?.datetime[0]?.times?.Fajr,
      name: 'Fajr',
      color: 'rgba(92,126,148,255)',
      icon: <WiSunrise size="2em" />
    },
    {
      time: prayers?.data?.results?.datetime[0]?.times?.Dhuhr,
      name: 'Dhuhr',
      color: 'rgba(252,212,86,255)',
      icon: <WiDaySunny size="2em" />
    },
    {
      time: prayers?.data?.results?.datetime[0]?.times?.Asr,
      name: 'Asr',
      color: 'rgba(251,196,86,255)',
      icon: <WiDayCloudy size="2em" />
    },
    {
      time: prayers?.data?.results?.datetime[0]?.times?.Maghrib,
      name: 'Maghrib',
      color: 'rgba(213,80,57,255)',
      icon: <WiSunset size="2em" />
    },
    {
      time: prayers?.data?.results?.datetime[0]?.times?.Isha,
      name: 'Isha',
      color: 'rgba(40,81,120,255)',
      icon: <WiMoonWaxingCrescent4 size="2em" />
    }
  ];

  const rise = [
    {
      time: prayers?.data?.results?.datetime[0]?.times?.Sunrise,
      name: 'Sunrise',
      icon: <WiSunrise size="2em" />
    },
    {
      time: prayers?.data?.results?.datetime[0]?.times?.Sunset,
      name: 'Sunset',
      color: 'rgba(252,212,86,255)',
      icon: <WiSunset size="2em" />
    }
  ];

  const timesInMillis = times?.map((t) => t.time);

  const countryCode = localCity.countryCode.toUpperCase();

  const next = timesInMillis
    .map(function (s) {
      return moment(s, 'HH:mm');
    })
    .sort(function (m) {
      return m.valueOf();
    })
    .find(function (m) {
      return m.isAfter();
    });

  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timeRight, setTimeRight] = useState<number>(0);

  let audio = new Audio('adhan/Salah-Mansoor-Az-Zahrani.mp3');

  const start = () => {
    audio.play();
  };

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: number | null = null;
    let startTime: Moment = moment(now, 'HH:mm:ss');
    let endTime = moment(next, 'HH:mm:ss');
    let duration = moment.duration(endTime.diff(startTime));
    //@ts-ignore
    let hours: number = parseInt(duration.asHours());
    //@ts-ignore

    let minutes = parseInt(duration.asMinutes()) - hours * 60;

    if (next) {
      interval = window.setInterval(() => {
        setSeconds((seconds) => seconds + 1);

        setTimeLeft(hours);

        setTimeRight(minutes);
      }, 1000);
    }

    //@ts-ignore

    return () => clearInterval(interval);
  }, [seconds, next]);

  useEffect(() => {
    if (timeLeft === 0 && timeRight === 1 && notification) {
      start();
    }
  }, [timeLeft, timeRight, notification]);

  return (
    <div className=" mb-12">
      <div>
        {times.map((time, index) => {
          if (time.time === next?.format('HH:mm')) {
            return (
              <NextPrayer
                key={index}
                today={today}
                now={now}
                prayerName={time.name}
                prayerIcon={time.icon}
                countryCode={countryCode}
                city={localCity.name}
                country={localCity.country}
                timeLeft={timeLeft}
                timeRight={timeRight}
                rise={rise}
              />
            );
          }
          return null;
        })}
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {times.map((item) => (
          <div
            key={item.name}
            style={{
              backgroundImage: `url(${backgroundMosque})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'multiply',
              backgroundColor: item.color
            }}
            className=" opacity-80 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 rounded-lg overflow-hidden">
            <dt className="flex space-x-8">
              <div className=" bg-green-500 flex justify-center rounded-md">{item.icon}</div>
              <p className="ml-16 font-bold text-white  truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 justify-center rounded py-2  flex bg-green-400 items-baseline ">
              <p className="text-xl text-black font-black ">{item.time}</p>
            </dd>
          </div>
        ))}
      </dl>
      <Table weekPrayers={weekPrayers} />
    </div>
  );
}

export default Homepage;
