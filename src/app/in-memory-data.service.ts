import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id:1, username: 'test', pwd: 'test', role:'admin', stid:'12345'},
      {id:2, username: 'test1', pwd: 'test1', role: 'student', stid:'45678'}
    ];

    let newses = [
      {
        id:1,
        title: '升中一至升中六現有學生專享',
        date: '16-02-2017',
        img: 'data:image/png;base64,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',
        content: '<p>在19/6前，今年未報讀過Adrian、Christy或Rachel 中學課程的現有學生/舊生首次報讀7-8月暑期中/英文堂, 可享連續半年中/英文科半價，中文科 Adrian 導師親身考獲DSE中文5**，英文科導師為Ms Christy Wan 和 Ms Rachel Ma。如果介紹新生報讀，新生亦可享連續半年中/英文科半價。在報名登記時出示此訊息便可。</p>'
      },
      {
        id:2,
        title: '升中一至升中六現有學生專享',
        date: '16-02-2017',
        img: 'data:image/png;base64,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',
        content: 'testing contend 2'
      }
    ];

    let lessons = [
      {
        id:1,
        name: '碩士中文班 (每週一堂) (K1-P3)',
        date: '12-06/2017',
        period: '11:00-12:00',
        room: 'G403B',
        teacher: 'Carman 1'
      },
      {
        id:1,
        name: '碩士中文班 (每週一堂) (K1-P3)',
        date: '12-06/2017',
        period: '11:00-12:00',
        room: 'G403B',
        teacher: 'Carman 2'
      },
      {
        id:1,
        name: '碩士中文班 (每週一堂) (K1-P3)',
        date: '12-06/2017',
        period: '11:00-12:00',
        room: 'G403B',
        teacher: 'Carman 3'
      },
      {
        id:1,
        name: '碩士中文班 (每週一堂) (K1-P3)',
        date: '12-06/2017',
        period: '11:00-12:00',
        room: 'G403B',
        teacher: 'Carman 4'
      }
    ];

    let lessonOfDays = [
      {
        dayOfWeek: '星期二',
        date: '17/06/2017',
        lessons: lessons,
      },
      {
        dayOfWeek: '星期二',
        date: '17/06/2017',
        lessons: lessons,
      },
      {
        dayOfWeek: '星期二',
        date: '17/06/2017',
        lessons: lessons,
      },
      {
        dayOfWeek: '星期二',
        date: '17/06/2017',
        lessons: lessons,
      },
      {
        dayOfWeek: '星期二',
        date: '17/06/2017',
        lessons: lessons,
      }
    ]

    let timetables = [{
      lessonOfDays: lessonOfDays,
    }]

    let dictationLists = [
      {
        id:1,
        name: 'list1',
        words: ['a', 'b', 'c', 'd'],
      },
      {
        id:2,
        name: 'list2',
        words: ['aa', 'bb', 'cc', 'dd'],
      },
      {
        id:3,
        name: 'list3',
        words: ['a3', 'b3', 'c3', 'd3'],
      }
    ]

    let rewardList = [
      {
        date:'16-06-2017',
        reason:'reason',
        teacher:'teacher',
        used: 'yes'
      },
      {
        date:'16-06-2017',
        reason:'reason',
        teacher:'teacher',
        used: 'yes'
      },
      {
        date:'16-06-2017',
        reason:'reason',
        teacher:'teacher',
        used: 'yes'
      },
      {
        date:'16-06-2017',
        reason:'reason',
        teacher:'teacher',
        used: 'yes'
      },
      {
        date:'16-06-2017',
        reason:'reason',
        teacher:'teacher',
        used: 'yes'
      }
    ]

    let redeemList = [
      {
        date:'16-06-2017',
        prize: 'sada',
        tropyUsed: '50',
      },
      {
        date:'16-06-2017',
        prize: 'asdsa',
        tropyUsed: '50',
      }
    ]

    let tropy = {
      rewardNo:4,
      redeemNo:2,
      rewardList: rewardList,
      redeemList: redeemList
    }

    let rewardReasons = ['a','b','c','d','e']

    return {users, newses, timetables, dictationLists, tropy, rewardReasons};
  }
}
