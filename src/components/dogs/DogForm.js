import React from 'react';

export default function DogForm({
  name,
  setName,
  bio,
  setBio,
  image,
  setImage,
  age,
  setAge,
  breed,
  setBreed,
  handleSubmit,
  errors,
}) {
  return (
    <div className="dog-form">
      <form>
        <h2>Enter Dog Details</h2>

        <div className="form-control">
          <label>Name:</label>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p>{errors.name}</p>
        </div>
        <div className="form-control">
          <label>Bio:</label>
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Age: </label>
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Image: </label>
          <input
            placeholder="Image URL"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Breed: </label>
          <input
            placeholder="Breed"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </div>
        <div className="action">
          <button onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  );
}
