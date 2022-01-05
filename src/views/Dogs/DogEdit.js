import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DogForm from '../../components/dogs/DogForm';
import { fetchDogById, updateDog } from '../../services/dogs';

export default function DogEdit() {
  // const [dog, setDog] = useState({});
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);

      setName(resp.name);
      setBio(resp.bio);
      setImage(resp.image);
      setAge(resp.age);
      setBreed(resp.breed);
    };
    fetchData();
  }, [params.id]);

  // const updateDog = (key, value) => {
  //   dog[key] = value; // updating an individual key
  //   setDog({ ...dog }); // setting the change into state
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await updateDog(params.id, name, bio, image, breed);
  };

  return (
    <div>
      <h1>Edit Dog</h1>
      <DogForm
        name={name}
        setName={setName}
        bio={bio}
        setBio={setBio}
        image={image}
        setImage={setImage}
        age={age}
        setAge={setAge}
        breed={breed}
        setBreed={setBreed}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
