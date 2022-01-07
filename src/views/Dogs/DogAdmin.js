import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/dogs/DogForm';
import { createDog } from '../../services/dogs';

export default function DogAdmin() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({ name: '', bio: '' });

  const history = useHistory();

  const submitter = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setErrors((prevValue) => ({ ...prevValue, name: 'Please enter a name' }));
    } else {
      const { status, error, data } = await createDog(name, bio, image, age, breed);
      console.log(data);
      if (status >= 400) {
        setMessage('Something went wrong :(');
      } else {
        history.push(`/dogs/${data.id}`);
      }
    }
  };

  return (
    <div>
      <h1>Dog Admin</h1>
      <p>{message}</p>
      <DogForm
        errors={errors}
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
        handleSubmit={submitter}
      />
    </div>
  );
}
