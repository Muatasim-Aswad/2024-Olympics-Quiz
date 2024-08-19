/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'Which country won the highest number of gold medals?',
      answers: {
        a: 'China',
        b: 'The United States',
        c: 'The United Kingdom',
        d: 'Japan',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Medals',
          href: 'https://olympics.com/en/paris-2024/medals',
        },
      ],
    },
    {
      text: ' Who is the Muffin Man in the Olympics?',
      answers: {
        a: 'Latvian swimmer Daniils Bobrovs',
        b: 'Norwegian swimmer Henrik Christiansen',
        c: 'Spanish swimmer Adrian Abadia',
        d: 'Japanese athlete Ryuta Arakawa',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Why did it go viral',
          href: 'https://www.rnz.co.nz/news/olympics-2024/525210/what-is-the-olympic-chocolate-muffin-and-why-did-it-go-viral',
        },
      ],
    },
    {
      text: 'What is Modern Pentathlon?',
      answers: {
        a: 'Horse riding, pistol shooting,fencing,sport climbing and golf',
        b: 'Judo, swimming, horse riding, pistol shooting, and running',
        c: 'Fencing, swimming, horse riding, pistol shooting, and running',
        d: 'Artistic Swimming, water polo,surfing,diving and rowing',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Modern Pentathlon',
          href: 'https://en.wikipedia.org/wiki/Modern_pentathlon',
        },
      ],
    },
    {
      text: 'How many countries competed in the 2024 Olympics?',
      answers: {
        a: '206',
        b: '300',
        c: '195',
        d: '210',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'National olympic committees',
          href: 'https://olympics.com/ioc/faq/competing-and-being-part-of-the-games/how-many-athletes-and-countries-take-part-in-the-olympic-games',
        },
      ],
    },
    {
      text: 'Which animal made an unexpected appearance at the Olympics this year?',
      answers: {
        a: 'Lion',
        b: 'Elephant',
        c: 'Wolf',
        d: 'Whale',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Surprise appearance during 2024 Paris Olympics',
          href: 'https://www.cbsnews.com/news/whale-2024-paris-olympics-surfing-tahiti/',
        },
      ],
    },
    {
      text: 'Which countries won their first-ever gold medal at the Olympics 2024?',
      answers: {
        a: 'Botswana, Dominica, Guatemala and Saint Lucia',
        b: 'Tunisia, Uzbekistan and Canada',
        c: 'Malawi, Saint Lucia and Algeria',
        d: 'Sierra Leone and Togo',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: ' Very first gold medal',
          href: 'https://olympics.com/en/news/paris-2024-olympics-nations-won-first-ever-medal-at-the-games',
        },
      ],
    },
    {
      text: 'What did Léon Marchand achieve at the Paris 2024 Olympics?',
      answers: {
        a: 'Won gold in the 200m breaststroke.',
        b: 'Won four gold medals in swimming.',
        c: 'Set records in the 100m freestyle and 200m medley.',
        d: 'Claimed gold in both freestyle relay events.',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Olympics',
          href: 'https://olympics.com/en/news/leon-marchand-frenchman-between-winning-two-olympic-gold-medals',
        },
      ],
    },
    {
      text: 'What sports do athletes compete in during a Triathlon?',
      answers: {
        a: 'Swimming, cycling, and running',
        b: 'Diving,surfing and swimming',
        c: 'Taekwondo,Judo and wrestling',
        d: 'Archery, fencing and equestrian',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Triathlon',
          href: 'https://en.wikipedia.org/wiki/Triathlon',
        },
      ],
    },
    {
      text: 'Where is the most laid-back shooter in the Olympic games from ?',
      answers: {
        a: 'Japan',
        b: 'The United States',
        c: 'Turkey ',
        d: 'Guatemala',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Sharpshooter wins silver medal',
          href: 'https://www.nbcnews.com/news/sports/sharpshooter-yusuf-dikec-silver-olympics-minimal-gear-internet-sensati-rcna164685',
        },
      ],
    },
    {
      text: 'Which of the following was once an Olympic sport?',
      answers: {
        a: 'Bowling',
        b: 'American Football',
        c: 'Chess',
        d: 'Tug-of-War',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Discontinued olympic events',
          href: 'https://www.ripleys.com/stories/discontinued-olympic-events',
        },
      ],
    },
  ],
};
