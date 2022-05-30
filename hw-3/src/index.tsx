import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

interface IUser {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: Array<IUser> = [
  {
    name: 'Harry Felton',
    phone: '(09) 897 33 33',
    email: 'felton@gmail.com',
    animals: ['cat'],
    cars: ['bmw'],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: 'May Sender',
    phone: '(09) 117 33 33',
    email: 'sender22@gmail.com',
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: 'Henry Ford',
    phone: '(09) 999 93 23',
    email: 'ford0@gmail.com',
    cars: ['bmw', 'audi'],
    hasChildren: true,
    hasEducation: false,
  },
];

//     1. Создать строку из имен пользователей через запятую

function getUsernamesString(users: Array<IUser>): string {
  return users.map((user) => user.name).join(', ');
}

//     2. Посчитать общее количнство машин у пользователей

function getCarsTotalCount(users: Array<IUser>): number {
  return users.reduce((acc, user) => {
    return user.cars ? acc + user.cars.length : acc;
  }, 0);
}

//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

function filterUsersEducation(users: Array<IUser>): Array<IUser> {
  return users.filter((user) => {
    if (user.hasEducation) {
      return user;
    }
  });
}

//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

function filterUsersAnimals(users: Array<IUser>): Array<IUser> {
  return users.filter((user) => {
    if (user.animals) {
      return user;
    }
  });
}

//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

function getCarsString(users: Array<IUser>): string {
  const cars: Set<string> = new Set<string>();
  users.forEach((user) => {
    if (user.cars) {
      user.cars.forEach((car) => cars.add(car));
    }
  });
  return Array.from(cars).join(', ');
}
