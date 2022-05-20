//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количнство студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к  меньшему

const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

//     1. Создать строку из названий предметов написаных через запятую

const subjectsString = Object.keys(subjects).join(', ');
console.log(subjectsString);

//     4. Создать массив из объектов предметов

const subjectsArray = [];
const subjectsKeys = Object.keys(subjects);

subjectsKeys.forEach((key) => {
  subjectsArray.push({ ...subjects[key] });
});

//     2. Посчитать общее количнство студентов и учителей на всех предметах

const studentsCount = subjectsArray.reduce((acc, subject) => {
  return acc + subject.students;
}, 0);
console.log(studentsCount);

const teachersCount = subjectsArray.reduce((acc, subject) => {
  return acc + subject.teachers;
}, 0);
console.log(teachersCount);

//     3. Получить среднее количество студентов на всех пердметах

const studentsAverage = studentsCount / subjectsArray.length;
console.log(studentsAverage);

//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к  меньшему

const subjectsArr = Object.entries(subjects);
subjectsArr.sort((a, b) => {
  return b[1].teachers - a[1].teachers;
});
console.log(subjectsArr);
