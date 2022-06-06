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

// interface IUser {
//   name: string;
//   phone: string;
//   email: string;
//   animals?: string[];
//   cars?: string[];
//   hasChildren: boolean;
//   hasEducation: boolean;
// }

// const users: Array<IUser> = [
//   {
//     name: 'Harry Felton',
//     phone: '(09) 897 33 33',
//     email: 'felton@gmail.com',
//     animals: ['cat'],
//     cars: ['bmw'],
//     hasChildren: false,
//     hasEducation: true,
//   },
//   {
//     name: 'May Sender',
//     phone: '(09) 117 33 33',
//     email: 'sender22@gmail.com',
//     hasChildren: true,
//     hasEducation: true,
//   },
//   {
//     name: 'Henry Ford',
//     phone: '(09) 999 93 23',
//     email: 'ford0@gmail.com',
//     cars: ['bmw', 'audi'],
//     hasChildren: true,
//     hasEducation: false,
//   },
// ];

// //     1. Создать строку из имен пользователей через запятую

// function getUsernamesString(users: Array<IUser>): string {
//   return users.map((user) => user.name).join(', ');
// }

// //     2. Посчитать общее количнство машин у пользователей

// function getCarsTotalCount(users: Array<IUser>): number {
//   return users.reduce((acc, user) => {
//     return user.cars ? acc + user.cars.length : acc;
//   }, 0);
// }

// //     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

// function filterUsersEducation(users: Array<IUser>): Array<IUser> {
//   return users.filter((user) => user.hasEducation === true);
// }

// //     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

// function filterUsersAnimals(users: Array<IUser>): Array<IUser> {
//   return users.filter((user) => user?.animals);
// }

// //     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

// function getCarsString(users: Array<IUser>): string {
//   const cars: Set<string> = new Set<string>();
//   users.forEach((user) => {
//     if (user.cars) {
//       user.cars.forEach((car) => cars.add(car));
//     }
//   });
//   return Array.from(cars).join(', ');
// }

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
}

const users: Array<IUser> = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    age: 23,
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    age: 20,
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    age: 40,
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    age: 36,
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
    age: 70,
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
    age: 45,
  },
];

// 2. Создать массив из emails по алфавиту.

// const sortByEmail = (arr: Array<IUser>) => {
//   arr
//     .map((user: IUser) => user.email)
//     .sort((a: string, b: string) => {
//       a.localeCompare(b);
//     });
// };

// 3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле, отвечающее за имя пользователя(например username), которое должно содержать имя и фамилию.
interface INewUser {
  id: number;
  username: string;
}

const getNewArr = (arr: Array<IUser>): Array<INewUser> => {
  return arr.map((user) => {
    return { id: user.id, username: user.first_name + ' ' + user.last_name };
  });
};

//превратить в ожну сртоку

console.log(getNewArr(users));

// 4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.

const sortByAge = (arr: Array<IUser>) => {
  return arr.filter((user) => user.age < 40).sort((a, b) => a.age - b.age);
};

console.log(sortByAge(users));

// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18
// 6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте. Пример того, что надо получить, когда пользователи имеют следующие фамилии Snow, Felton , Ford, Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }
