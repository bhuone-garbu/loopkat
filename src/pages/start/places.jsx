import React from 'react';

import PlacesTinder from '../../components/PlacesTinder';

export default () => {
  const activities = [
    {
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolores quas voluptatum at exercitationem rem minus, nesciunt saepe earum, neque veniam cupiditate culpa fugit aliquid adipisci dicta corporis esse cumque!',
      image:
        'https://secureservercdn.net/166.62.113.120/e8b.467.myftpupload.com/wp-content/uploads/2015/10/vangogh10-e1509551402662.jpg',
      title: 'Van Gogh Museum',
      type: 'museam',
    },
  ];
  return <PlacesTinder activities={activities} destination="Amsterdam" totalDays={4} />;
};
