import React from 'react';
const users = [
  {
    id: 1,
    name: 'John',
    gender: 'male',
    details: { age: 22, address: '123 Maple St' },
  },
  {
    id: 2,
    name: 'Jane',
    gender: 'female',
    details: { age: 28, address: '234 Oak St' },
  },
  {
    id: 3,
    name: 'Joe',
    gender: 'male',
    details: { age: 32, address: '456 Cedar St' },
  },
];
type details = {
  age: number;
  address: string;
};
type userType = {
  id: number;
  name: string;
  gender: 'male' | 'female';
  details: details;
};

const Page = () => {
  return <div>Page</div>;
};

export default Page;
