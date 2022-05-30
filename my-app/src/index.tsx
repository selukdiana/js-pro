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
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
}

const users: IUser[] = [
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
];

const getUser = (id: number, users: IUser[]) => {
  return users.find((user: IUser) => user.id === id);
};

console.log(getUser(7, users));

// interface IFaculty {
//   id: number;
//   faculty: string;
//   subjects: string[];
//   countStudents:number
// }

interface IFaculty {
  id: number;
  faculty: string;
  subjects: string[];
  countStudents: number;
}

const faculties: IFaculty[] = [
  {
    id: 1,
    faculty: 'History department',
    subjects: ['The World History', 'History of Rome'],
    countStudents: 44,
  },
  {
    id: 2,
    faculty: 'Department of Biology',
    subjects: ['biology', 'chemistry'],
    countStudents: 50,
  },
  {
    id: 3,
    faculty: 'Faculty of Mathematics',
    subjects: ['mathematics', 'geometry', 'trigonometry'],
    countStudents: 72,
  },
  {
    id: 4,
    faculty: 'Faculty of Design',
    subjects: ['ui', 'ux', 'graphic design'],
    countStudents: 37,
  },
];

// interface IMovie {
//   id: number;
//   title: string;
//   year: number;
//   released: string;
//   runtime: string;
//   genre: string[];
//   director: string;
//   writer: string;
//   actors: string[];
//   plot: string;
//   country: string;
//   poster: string;
//   imdbRating: number;
//   imdbVotes: number;
//   type: string;
//   boxOffice: string;
//   production: string;
// }
const movies = [
  {
    id: 1,
    title: 'Black Widow',
    year: 2021,
    released: '09 Jul 2021',
    runtime: '134 min',
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    director: 'Cate Shortland',
    writer: 'Eric Pearson, Jac Schaeffer, Ned Benson',
    actors: ['Scarlett Johansson', 'Florence Pugh', 'David Harbour'],
    plot: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
    country: 'United States',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: 'movie',
    boxOffice: '$138,027,361',
    production: 'Marvel Studios',
  },
  {
    id: 2,
    title: 'Harry Potter and the Deathly Hallows: Part 2',
    year: 2011,
    released: '15 Jul 2011',
    runtime: '130 min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    director: 'David Yates',
    writer: 'Steve Kloves, J.K. Rowling',
    actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    country: 'United Kingdom, United States',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',

    imdbRating: 8.1,
    imdbVotes: 790377,
    type: 'movie',
    boxOffice: '$381,409,310',
    production: 'Heyday Films, Moving Picture Company, Warner Bros.',
  },
];

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из названий стран через запятую
//     2. Посчитать общее количнство людей в данном массиве стран.
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//     4. Получить массив валют.
//     5. Получить массив городов, отсортированных в алвавитном порядке.
//     5. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.


// return […data].sort((a, b) => a.country.localCompare(b.country))


interface ICountry {
  country: string;
  abbreviation: string;
  city: string;
  currency_name: string;
  population: number;
}

const countries: Array<ICountry> = [
  {
    country: 'United Arab Emirates',
    abbreviation: 'AE',
    city: 'Abu Dhabi',
    currency_name: 'Arab Emirates Dirham',
    population: 9630959,
  },
  {
    country: 'Poland',
    abbreviation: 'PL',
    city: 'Warszawa',
    currency_name: 'Polish Zloty',
    population: 37974750,
  },
  {
    country: 'Russian Federation',
    abbreviation: 'RU',
    city: 'Moscow',
    currency_name: 'Russian Ruble',
    population: 144478050,
  },
];
