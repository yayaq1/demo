export interface Question {
  id: string;
  text: string;
  category: 'tech' | 'personal' | 'funny' | 'deep';
}

export const questions: Question[] = [
  {
    id: '1',
    text: "What's a weird tech habit you have?",
    category: 'tech'
  },
  {
    id: '2',
    text: "What's the most chaotic bug you've ever caused?",
    category: 'tech'
  },
  {
    id: '3',
    text: "What non-tech skill are you weirdly good at?",
    category: 'personal'
  },
  {
    id: '4',
    text: "Who in this group is most likely to go full indie hacker?",
    category: 'funny'
  },
  {
    id: '5',
    text: "What's your most controversial tech opinion?",
    category: 'tech'
  },
  {
    id: '6',
    text: "If you could delete one programming language from existence, which would it be?",
    category: 'tech'
  },
  {
    id: '7',
    text: "What's the weirdest thing you've Googled while coding?",
    category: 'funny'
  },
  {
    id: '8',
    text: "What's your go-to excuse when your code doesn't work?",
    category: 'funny'
  },
  {
    id: '9',
    text: "What's a skill you wish you had learned earlier in your career?",
    category: 'deep'
  },
  {
    id: '10',
    text: "What's your favorite keyboard shortcut that makes you feel like a wizard?",
    category: 'tech'
  },
  {
    id: '11',
    text: "What's the most embarrassing thing in your browser history?",
    category: 'funny'
  },
  {
    id: '12',
    text: "If you could pair program with anyone (dead or alive), who would it be?",
    category: 'deep'
  },
  {
    id: '13',
    text: "What's your biggest 'it works on my machine' moment?",
    category: 'tech'
  },
  {
    id: '14',
    text: "What's the most creative solution you've ever implemented?",
    category: 'tech'
  },
  {
    id: '15',
    text: "What's your guilty pleasure when procrastinating from coding?",
    category: 'personal'
  },
  {
    id: '16',
    text: "What's the worst variable name you've ever written?",
    category: 'funny'
  },
  {
    id: '17',
    text: "What technology do you think is overhyped?",
    category: 'tech'
  },
  {
    id: '18',
    text: "What's your dream side project?",
    category: 'deep'
  },
  {
    id: '19',
    text: "What's the longest you've spent debugging a single issue?",
    category: 'tech'
  },
  {
    id: '20',
    text: "If you could automate one boring task in your life, what would it be?",
    category: 'personal'
  },
  {
    id: '21',
    text: "What's your favorite coding music or do you prefer silence?",
    category: 'personal'
  },
  {
    id: '22',
    text: "What's the most useful thing you've learned from Stack Overflow?",
    category: 'tech'
  },
  {
    id: '23',
    text: "What's your biggest fear about the future of tech?",
    category: 'deep'
  },
  {
    id: '24',
    text: "What's the most ridiculous feature request you've ever received?",
    category: 'funny'
  },
  {
    id: '25',
    text: "What's your favorite way to explain complex tech concepts to non-technical people?",
    category: 'deep'
  }
];

export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}; 