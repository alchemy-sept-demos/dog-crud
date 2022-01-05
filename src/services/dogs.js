import { checkError, client } from './client';
export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').eq('id', id).single();
  return checkError(resp);
}

export async function updateDog(id, name, bio, image, breed) {
  const resp = await client
    .from('dogs')
    .update({
      name,
      bio,
      image,
      breed,
    })
    .eq('id', id);
  return checkError(resp);
}
