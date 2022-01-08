import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Dog from '../../components/dogs/Dog';
import Loader from '../../components/Loader/Loader';
import { fetchDogById } from '../../services/dogs';

export default function DogDetail({
  match: {
    params: { id },
  },
}) {
  console.log(id);
  const params = useParams();
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('fetching dogs');
    const fetchData = async () => {
      // const resp = await fetchDogById(params.id);
      const resp = await fetchDogById(params.id);
      setDog(resp);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);
  return (
    <div>
      {loading && <Loader />}
      {!loading && <Dog {...dog} showDetail={true} />}
      <Link to={`/dogs/${Number(params.id) + 1}`}> Next </Link>
    </div>
  );
}
