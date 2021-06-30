import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2005-02-20T04:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'San Diego, CA',
  },
  {
    key: 'elbow',
    label: '# of times I\'ve scraped my right elbow',
    value: '5',
  },
  {
    key: 'book',
    label: 'Favorite book',
    value: 'Beloved by Toni Morrison',
  },
  {
    key: 'mathematician',
    label: 'Favorite mathematician',
    value: 'Marian Pour-El',
    link: 'https://cse.umn.edu/math/marian-pour-el',
  },
  {
    label: 'Site last updated at',
    key: 'pushed_at',
    value: '06-29-2021',
  },
  {
    label: 'Lines of Javascript powering this website',
    value: '2115',
    link: 'https://github.com/nicoleipi/personal-site',
  },
];

export default data;
