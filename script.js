// Map - соответсвие чего-то чему-то (to map something) обьект как пример
// если есть множество обьектовб

const elements = {
    question: document.querySelector('.question-container h2'),
    answers: document.querySelectorAll('.questions-list span')
}

const fillContent = (obj) => {
    // передаю обьект из questions и согласно пререданному вопросу - строит карточку
    elements.question.innerText = obj.question;

}

const randNum = (limit) => Math.floor(Math.random() * limit);

const shuffle = (arr) => {
    const newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(randNum(arr.length), 1)[0])
    }
    return newArr;
}


const questions = [
  {
    question:
      "Mit Ausnahme von Bedienungsrechten von Hypotheken ist der volle Betrag in Abzug zu bringen, nach Bereinigung um entsprechende latente Steuerverbindlichkeiten",
    answers: [
      "Mit Ausnahme von Bedienungsrechten von Hypotheken",
      "N ist der volle Betrag in Abzug zu b",
      "Abzug zu bringen, nach Bereini",
      "Entsprechende latente Steuerverbindlichkeiten"
    ],
    correct: "Mit Ausnahme von Bedienungsrechten von Hypotheken",
    explanation: "He shall have Power, by and with the Objections, to the other House, by which it shall have the sole Power of the United States under this Constitution, shall be held in the State from which he fled, be delivered up, to be removed to the whole Number of Senators and Representatives to which the Concurrence of two thirds of the Senate shall, in Consequence of Appropriations made by Law. "
  },

  {
    question:
      "Mit Ausnahme von Bedienungsrechten von Hypotheken ist der volle Betrag in Abzug zu bringen, nach Bereinigung um entsprechende latente Steuerverbindlichkeiten",
    answers: [
      "Mit Ausnahme von Bedienungsrechten von Hypotheken",
      "N ist der volle Betrag in Abzug zu b",
      "Abzug zu bringen, nach Bereini",
      "Entsprechende latente Steuerverbindlichkeiten"
    ],
    correct: "Mit Ausnahme von Bedienungsrechten von Hypotheken",
    explanation: "He shall have Power, by and with the Objections, to the other House, by which it shall have the sole Power of the United States under this Constitution, shall be held in the State from which he fled, be delivered up, to be removed to the whole Number of Senators and Representatives to which the Concurrence of two thirds of the Senate shall, in Consequence of Appropriations made by Law. "
  },

  {
    question:
      "Mit Ausnahme von Bedienungsrechten von Hypotheken ist der volle Betrag in Abzug zu bringen, nach Bereinigung um entsprechende latente Steuerverbindlichkeiten",
    answers: [
      "Mit Ausnahme von Bedienungsrechten von Hypotheken",
      "N ist der volle Betrag in Abzug zu b",
      "Abzug zu bringen, nach Bereini",
      "Entsprechende latente Steuerverbindlichkeiten"
    ],
    correct: "Mit Ausnahme von Bedienungsrechten von Hypotheken",
    explanation: "He shall have Power, by and with the Objections, to the other House, by which it shall have the sole Power of the United States under this Constitution, shall be held in the State from which he fled, be delivered up, to be removed to the whole Number of Senators and Representatives to which the Concurrence of two thirds of the Senate shall, in Consequence of Appropriations made by Law. "
  },
];
