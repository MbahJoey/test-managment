const TESTS_DATA = [
  {
    testId: 1,
    authorId: 2,
    authorName: "Rhotmans Lseries",
    title: "Английски",
    timesCompleted: 3,
    questions: [
      { id: 1, question: "I ___________ with my breakfast.", rightAnswer: "have just finished", type: "text" },
      { id: 2, question: "They _________ here for many years, maybe more than 20.", rightAnswer: "have lived", type: "text" },
      { id: 3, question: "Тhe way people learn languages _________ a lot in the last few years.", rightAnswer: "has changed", type: "text" },
    ],
    route: "test1",
  },
  {
    testId: 2,
    authorId: 3,
    authorName: "George Coffee",
    title: "Български",
    timesCompleted: 2,
    questions: [
      { id: 1, question: "Гочоолу, Дочоолу и Гуньо Адвокатина са герои от творба на:", rightAnswer: "Алеко Константинов", type: "radio" },
      { id: 2, question: "В кой от редовете е допусната правописна грешка?", rightAnswer: "brb", type: "radio" },
      { id: 3, question: "Коя от изброените творби е роман?", rightAnswer: "Тютюн", type: "text" },
    ],
    route: "test2",
  },
  {
    testId: 3,
    authorId: 4,
    authorName: "Philly Coffee",
    title: "Френски",
    timesCompleted: 2,
    questions: [
      { id: 1, question: "asd", rightAnswer: "asd", type: "text" },
      { id: 2, question: "brb", rightAnswer: "brb", type: "text" },
      { id: 3, question: "tel", rightAnswer: "asd", type: "image" },
      { id: 4, question: "red", rightAnswer: "asd", type: "radio" },
      { id: 5, question: "green", rightAnswer: "asd", type: "button" },
    ],
    route: "test3",
  },
];
export default TESTS_DATA;
