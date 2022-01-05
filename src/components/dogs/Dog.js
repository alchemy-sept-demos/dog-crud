import React from 'react';
import './Dog.css';

export default function Dog({ name, image, breed, bio, age, showDetail = false }) {
  const getClassName = () => {
    return showDetail ? 'dog-detail' : 'dog-card';
  };
  const getAgeString = () => {
    if (age === 0) {
      return 'less than one year old';
    } else {
      return `${age} year old`;
    }
  };
  return (
    <div className={getClassName()}>
      <h3>Meet {name}</h3>
      <img src={image} />
      <p>
        {name} is a(n) {getAgeString()} {breed}
      </p>
      {showDetail && (
        <div className="details">
          <p>{bio}</p>
        </div>
      )}
    </div>
  );
}
