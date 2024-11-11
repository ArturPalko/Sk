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
        receiver: 'Палько Артур Сергійович',
        assignees: ['Іван', 'Марія'],
        status: {
            assignedTo: [{name:'Марина' , status: 'не вказано', date: 'не вказано'},
                {name:'Юрій' , status: 'Виконано', date: '05.11.2024' }] 
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
        receiver: 'Палько Артур Сергійович',
        assignees: ['Олег'],
        status: {
            assignedTo: [{name:'Анастасія' , status: 'не вказано', date: 'не вказано'},
                {name:'Юрій' , status: 'Виконано', date: '06.11.2024' }] 
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
        receiver: 'Палько Артур Сергійович',
        assignees: ['Софія'],
        status: {
            assignedTo: [{name:'Катерина' , status: 'не вказано', date: 'не вказано'},
                {name:'Юрій' , status: 'Виконано', date: '07.11.2024' }] 
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
        receiver: 'Палько Артур Сергійович',
        assignees: ['Анастасія', 'Дмитро'],
        status: {
            assignedTo: [{name:'Олена' , status: 'не вказано', date: 'не вказано'},
                {name:'Юрій' , status: 'Виконано', date: '08.11.2024' }] 
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
        receiver: 'Палько Артур Сергійович',
        assignees: ['Ігор', 'Марина'],
        status: {
            assignedTo: [{name:'Валерія' , status: 'не вказано', date: 'не вказано'},
                {name:'Юрій' , status: 'Виконано', date: '10.11.2024' }] 
        }
    }
];

export default tasks;
