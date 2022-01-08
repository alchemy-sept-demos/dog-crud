import { checkError, client } from './client';
export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').eq('id', id).single();
  return checkError(resp);
}

export async function updateDog(id, name, bio, image, age, breed) {
  const resp = await client
    .from('dogs')
    .update({
      name,
      bio,
      image,
      breed,
      age,
    })
    .eq('id', id);
  return checkError(resp);
}

export async function createDog(name, bio, image, age, breed) {
  const resp = await client
    .from('dogs')
    .insert({
      name: name,
      bio: bio,
      image: image,
      breed: breed,
      age: age,
    })
    .single();

  return resp;
}
