import React from 'react';

const seasonConfig = {
  summer: {
    text: 'hottttttttt',
    iconName: 'sun',
  },
  winter: {
    text: 'ES IST KALT MAN',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //next line is a Javascript ternary expression. The first part is evaluated (question mark)
    //after that it will return 'summer' if true and 'winter' if false
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
