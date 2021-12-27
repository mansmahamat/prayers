export default interface Prayer {
  code: number;
  status: string;
  results: {
    datetime: [
      {
        times: {
          Imsak: string;
          Sunrise: string;
          Fajr: string;
          Dhuhr: string;
          Asr: string;
          Sunset: string;
          Maghrib: string;
          Isha: string;
          Midnight: string;
        };
        date: {
          timestamp: number;
          gregorian: string;
          hijri: string;
        };
      }
    ];
    location: {
      latitude: number;
      longitude: number;
      elevation: number;
      country: string;
      country_code: string;
      timezone: string;
      local_offset: number;
    };
    settings: {
      timeformat: string;
      school: string;
      juristic: string;
      highlat: string;
      fajr_angle: number;
      isha_angle: number;
    };
  };
}
