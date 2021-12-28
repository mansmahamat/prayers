import React from 'react';
import PrayerWeek from '../types/PrayerWeek';
import moment from 'moment';

export interface CatsData {
  weekPrayers: PrayerWeek | undefined;
}

function Table({ weekPrayers }: CatsData) {
  const prayerName = ['Fajr', 'Dhur', 'Asr', 'Maghrib', 'Isha'];

  console.log(weekPrayers?.results.datetime);

  return (
    <div className="flex h-full  mt-12 flex-col">
      <h2 className="text-center mb-8">Prayers of the week</h2>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 mb-20 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="dark:bg-gray-900">
                <tr>
                  {prayerName.map((name, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-left  font-medium  uppercase tracking-wider">
                      {name}
                    </th>
                  ))}

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="dark:bg-gray-900  divide-y divide-gray-200">
                {weekPrayers?.results.datetime.map((prayers, index: number) => (
                  <tr className={index % 2 === 0 ? 'bg-green-100 text-black' : ''} key={index}>
                    <td className="px-6 py-4 whitespace-nowrap  font-medium ">
                      {prayers.times.Fajr}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  font-medium ">
                      {prayers.times.Dhuhr}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  ">{prayers.times.Asr}</td>
                    <td className="px-6 py-4 whitespace-nowrap  ">{prayers.times.Maghrib}</td>
                    <td className="px-6 py-4 whitespace-nowrap  ">{prayers.times.Isha}</td>
                    <td
                      className={
                        'px-6 py-4 whitespace-nowrap text-right  font-medium' +
                        (moment(prayers.date.gregorian).format('DD MMM YY') ===
                        moment().format('DD MMM YY')
                          ? ' bg-green-500'
                          : '')
                      }>
                      {moment(prayers.date.gregorian).format('DD MMM YY')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
