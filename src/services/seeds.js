require('react-scripts/config/env');
const { createClient } = require('@supabase/supabase-js');
const { seed } = require('faker');
const faker = require('faker');
const client = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

const dog = faker.animal.dog();
const bios = [
  'Sweet disposition, loves cuddles, needs a quiet home with no young children',
  'High energy pooch! Would do well in an active family with another dog to keep her company.',
  'Suspicious of strangers but once he knows you, will never leave your side.',
  'Loves to play with his foster sister for hours. Has lived with a cat and done well.',
  'Working on her resource guarding but very friendly otherwise. Would probably do best as the only dog in the home.',
  'She is love bug. Crate trained and sleeps through the night.',
  'A loyal and adventurous guy. Loves long morning walks and afternoon naps.',
  'Adores every person he meets. Very social and lots of energy',
];
let i = 1;
async function seedData() {
  const { data, error } = await client.from('dogs').insert([
    {
      name: faker.name.firstName(),
      breeds: [faker.animal.dog(), faker.animal.dog()],
      age: Math.floor(Math.random() * 5),
      image: `https://placedog.net/500?id=${i++}`,
      bio: bios[i],
    },
    {
      name: faker.name.firstName(),
      breeds: [faker.animal.dog(), faker.animal.dog()],
      age: Math.floor(Math.random() * 5),
      image: `https://placedog.net/500?id=${i++}`,
      bio: bios[i],
    },
    {
      name: faker.name.firstName(),
      breeds: [faker.animal.dog(), faker.animal.dog()],
      age: Math.floor(Math.random() * 5),
      image: `https://placedog.net/500?id=${i++}`,
      bio: bios[i],
    },
    {
      name: faker.name.firstName(),
      breeds: [faker.animal.dog(), faker.animal.dog()],
      age: Math.floor(Math.random() * 5),
      image: `https://placedog.net/500?id=${i++}`,
      bio: bios[i],
    },
    {
      name: faker.name.firstName(),
      breeds: [faker.animal.dog(), faker.animal.dog()],
      age: Math.floor(Math.random() * 5),
      image: `https://placedog.net/500?id=${i++}`,
      bio: bios[i],
    },
    {
      name: faker.name.firstName(),
      breeds: [faker.animal.dog(), faker.animal.dog()],
      age: Math.floor(Math.random() * 5),
      image: `https://placedog.net/500?id=${i++}`,
      bio: bios[i],
    },
  ]);
  console.log(data);
  console.log(error);
}
seedData();
