import IValues from "~/types/values";

const values: IValues = {
  id: '61cab231af',
  index: 0,
  guid: '2eef391e-b4bd-4ae4-b626-a75dcd7a1d2d',
  is_active: true,
  balance: '$1,024.60',
  picture: 'http://placehold.it/32x32',
  password: '1234',
  password_confirmation: '1234',
  age: 25,
  eye_color: 'green',
  name: 'Jessie Logan',
  gender: 'female',
  company: 'EBIDCO',
  email: 'jessielogan@ebidco.com',
  phone: '+1 (934) 589-3561',
  address: '346 Kings Place, Cliff, Indiana, 5297',
  about: 'Esse cupidatat velit cupidatat et pariatur occaecat culpa pariatur reprehenderit duis. Duis culpa minim commodo sint sit ad voluptate laborum. Culpa commodo ipsum fugiat incididunt id Lorem.\r\n',
  locked: '06-08-2021',
  registered: '2021-08-06T02:21:03 +05:00',
  latitude: 32.263258,
  longitude: 6.102082,
  tags: [
    'et',
    'proident',
    'pariatur',
    'esse',
    'esse',
    'mollit',
    'aliquip'
  ],
  friends: [
    { id: 0, name: 'Merrill Blackwell' },
    { id: 1, name: 'Ivy Cote' },
    { id: 2, name: 'Jacqueline Hartman' }
  ],
  greeting: 'Hello, Jessie Logan! You have 2 unread messages.',
  favorite_fruit: 'banana',
  favorite_friend_id: null,
  image: new File([], 'name', { type: 'image/png' }),
  pdf:   new File([], 'name', { type: 'application/pdf' }),
  video: new File([], 'name', { type: 'video/mp4' }),
  extra: {
    browser: 'edge'
  }
}

export default values
