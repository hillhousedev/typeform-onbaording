import { Question } from '../models/Question';

export const questionList: Question[] = [
    {
        id: 1,
        questionText: 'What is your estimated skill level?',
        options: [
            { text: 'Beginner'},
            { text: 'Experienced'},
            { text: 'Professional'},
        ],

    },
    {
        id: 2,
        questionText: 'Are you open to a remote option?',
        options: [
            { text: 'Yes' },
            { text: 'No' },
            { text: 'Partially'},
        ],
    },
    {
        id: 3,
        questionText: 'How many hours can you work weekly?',
        options: [
            { text: '30hrs' },
            { text: '40hrs' },
            { text: '50hrs above'},
        ],

    },
    {
        id: 4,
        questionText: 'Where are you based?',
        options: [
            { text: 'Africa' },
            { text: 'Europe' },
            { text: 'Asia' },
        ],
    },
    {
        id: 5,
        questionText: 'Are you open to relocation?',
        options: [
            { text: 'No' },
            { text: 'Yes' },
            { text: 'Subjective' },
        ],
    }
];
