import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Dog from '../../components/dogs/Dog';
import Loader from '../../components/Loader/Loader';

import { fetchDogs } from '../../services/dogs';

import './Dogs.css';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="dog-list" aria-busy={loading}>
      {loading && <Loader />}
      {!loading &&
        dogs.map((dog) => (
          <Link key={dog.id} to={`/dogs/${dog.id}`}>
            <Dog {...dog} />
          </Link>
        ))}
    </div>
  );
}
