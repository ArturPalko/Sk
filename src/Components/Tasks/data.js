let tasks = [
    {
        id: 1,
        department: 'Господарсько-експлуатаційний',
        description: 'Привіт',
        message: 'dagfapoegaoerkg[dfsogk[rejsg[fdogs',
        importance: 'висока',
        goal: 'До відома',
        sentAt: '05.11.2024',
        deadline: '06.11.2024',
        senderName: 'Артур',
        assignees: ['Іван', 'Марія'],
        status: {
            assignedTo: {
                Іван: 'в процесі',
                Марія: 'не почато'
            }
        }
    },
    {
        id: 2,
        department: 'Організаційно-розпорядчий',
        description: 'Як справи?',
        message: 'dagfapoegaoerkg[dfsogk[rejsg[fdogs',
        importance: 'середня',
        goal: 'До виконання',
        sentAt: '05.11.2024',
        deadline: '07.11.2024',
        senderName: 'Аліна',
        assignees: ['Олег'],
        status: {
            assignedTo: {
                Олег: 'в процесі'
            }
        }
    },
    {
        id: 3,
        department: 'Кадри',
        description: 'Ти крутий))',
        message: 'dagfapoegaoerkg[dfsogk[rejsg[fdogs',
        importance: 'низька',
        goal: 'Для врахування в роботі',
        sentAt: '05.11.2024',
        deadline: '10.11.2024',
        senderName: 'Петро',
        assignees: ['Софія'],
        status: {
            assignedTo: {
                Софія: 'завершено'
            }
        }
    },
    {
        id: 4,
        department: 'Бугалтерія',
        description: 'Авжеж це було складно',
        message: 'dagfapoegaoerkg[dfsogk[rejsg[fdogs',
        importance: 'висока',
        goal: 'Для врахування в роботі',
        sentAt: '05.11.2024',
        deadline: '05.11.2024',
        senderName: 'Катерина',
        assignees: ['Анастасія', 'Дмитро'],
        status: {
            assignedTo: {
                Анастасія: 'не почато',
                Дмитро: 'завершено'
            }
        }
    },
    {
        id: 5,
        department: 'Відділ IT',
        description: 'То що ти випрішив?',
        message: 'dagfapoegaoerkg[dfsogk[rejsg[fdogs',
        importance: 'середня',
        goal: 'До відома',
        sentAt: '05.11.2024',
        deadline: '08.11.2024',
        senderName: 'Олександр',
        assignees: ['Ігор', 'Марина'],
        status: {
            assignedTo: {
                Ігор: 'в процесі',
                Марина: 'не почато'
            }
        }
    }
];

export default tasks;
