import React, { ReactElement } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

interface Prayer {
  today: string;
  now: string;
  prayerName: string;
  prayerIcon: ReactElement;
  countryCode: string;
  city: string;
  country: string;
  timeLeft: number;
  timeRight: number;
  rise: any;
}

function NextPrayer({
  today,
  now,
  prayerName,
  prayerIcon,
  countryCode,
  city,
  country,
  timeRight,
  timeLeft,
  rise
}: Prayer) {
  return (
    <div className="p-2">
      <div className="max-w-full h-full border flex flex-col rounded overflow-hidden  shadow-lg">
        <div className="flex text-black   border-b   flex-row items-baseline flex-nowrap bg-green-400 p-2">
          <FaCalendarAlt />
          <h1 className="ml-2 uppercase font-bold ">Today</h1>
          <p className="ml-2 ">{today}, </p>
          <p className="ml-2  ">{now},</p>
          <p className="ml-2  ">about next prayer :</p>
        </div>
        <div className="mt-2 flex justify-start  p-2">
          <div className="flex mx-2 ml-6 h8 px-2 items-center flex-row text-black  rounded-full bg-green-400 p-1">
            {prayerIcon}
            <p className="font-black uppercase text-sm ml-1 ">{prayerName}</p>
          </div>
        </div>
        <div className="my-4 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
          <div className="flex flex-row justify-center place-items-center p-2 text-black rounded-lg bg-green-400">
            <img
              className="h-6 ml-2 rounded-lg"
              alt="United States"
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
            />
            <div className="flex flex-col ml-2">
              <p className="  font-bold">{city}</p>
              <p className="">{country}</p>
            </div>
          </div>

          <div className="flex flex-wrap  justify-center text-black rounded-lg bg-green-400">
            {rise.map((item: any, index: any) => (
              <div key={index}>
                <dt className="flex pt-2 px-2 ml-2">
                  <div className=" bg-green-500 flex rounded-md">{item.icon}</div>
                  <p className=" font-bold text-white  truncate">{item.name}</p>
                </dt>
                <dd className=" justify-center rounded py-2  flex bg-green-400 items-baseline ">
                  <p className="text-xl text-black font-black ">{item.time}</p>
                </dd>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap p-2 items-center text-black rounded-lg bg-green-400">
            <p className="font-bold">
              - {timeLeft > 1 && <span> {timeLeft} hours : </span>}
              {timeRight} minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextPrayer;
