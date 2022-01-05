import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Dog from '../../components/dogs/Dog';
import Loader from '../../components/Loader/Loader';
import { fetchDogById } from '../../services/dogs';

export default function DogDetail({
  match: {
    params: { id },
  },
}) {
  // const params = useParams();
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      // const resp = await fetchDogById(params.id);
      const resp = await fetchDogById(id);
      setDog(resp[0]);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      {loading && <Loader />}
      {!loading && <Dog {...dog} showDetail={true} />}
    </div>
  );
}
