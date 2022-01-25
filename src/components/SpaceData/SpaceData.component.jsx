import React, { useState, useEffect } from 'react';
import DateInfo from '../DateInfo';
import Image from '../Image';
import Video from '../Video';

const SpaceData = () => {
  const [nasaData, setNasaData] = useState([]);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    const url = `${process.env.REACT_APP_NASA_URL}?api_key=${process.env.REACT_APP_NASA_APIKEY}${date}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        setNasaData(data);
        setError(null);
        setIsLoading(false);
      } else {
        setError('API bad request, please try another date');
      }
      // eslint-disable-next-line
    } catch (error) {
      setError('There was an error, please try again');
    }
  }

  useEffect(() => {
    fetchData(date);
  }, [date]);

  if (isLoading) {
    return <h2>loading...</h2>;
  }
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <DateInfo
        date={date}
        setDate={setDate}
        nasaData={nasaData}
        setNasaData={setNasaData}
      />
      <h3>{nasaData.title}</h3>
      {nasaData.media_type === 'image' ? (
        <Image {...nasaData} />
      ) : (
        <Video {...nasaData} />
      )}
    </>
  );
};

export default SpaceData;
