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
      // React data validation -- can use to prevent bad data being written to your database
      setErrors((prevValue) => ({ ...prevValue, name: 'Please enter a name' }));
    } else {
      // OPTION ONE FOR ERRORS
      // Wrap everything in a try / catch
      // The checkError function in services/client.js will throw a JS
      // error if the request fails -- for this to work, you have to use
      // the checkError function

      // try {
      //   const data = await createDog(name, bio, image, age, breed);
      //   console.log(data);
      //   history.push(`/dogs/${data.id}`);
      // } catch (e) {
      //   console.log(e);
      //   setMessage('Something went wrong :(');
      // }

      // OPTION TWO FOR ERRORS
      // get the FULL response from supabase (don't use the checkError function)
      // the full response returns a status key with information about the request
      // if the request errored, it will return an http status code of 400 or higher

      const { data, status, error } = await createDog(name, bio, image, age, breed);
      if (status >= 400) {
        setMessage('Something went wrong :(');
        console.error(error);
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
