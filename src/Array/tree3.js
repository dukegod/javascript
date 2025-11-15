const theadGroups= [
  {
    id: 'a',
    title: '分组1',
    parent: 'c',
  },
  {
    id: 'b',
    title: '分组2',
    parent: 'c',
  },
  {
    id: 'c',
    title: '分组3',
  },
  {
    id: 'd',
    title: '分组4',
  },
]

const fields = [
  {
    code: 'dt',
  },
  {
    code: 'm1',
  },
  {
    code: 'm2',
    groupId: 'a',
    bar: true,
  },
  {
    code: 'm3',
    groupId: 'a',
  },
  {
    code: 'm4',
    groupId: 'b',
  },
  {
    code: 'm41'
  },
  {
    code: 'm5',
    groupId: 'b',
  },
  {
    code: 'm42'
  },
  {
    code: 'm6',
    groupId: 'd',
  },
  {
    code: 'm7',
    groupId: 'd',
  },
  {
    code: 'm8',
  },
  {
    code: 'm9',
  },
]


// 输出
const result = [
  {
    "code": "dt"
  },
  {
    "code": "m1"
  },
  {
    "id": "c",
    "title": "分组3",
    "children": [
      {
        "id": "a",
        "title": "分组1",
        "parent": "c",
        "children": [
          {
            "code": "m2",
            "groupId": "a",
            "bar": true
          },
          {
            "code": "m3",
            "groupId": "a"
          }
        ]
      },
      {
        "id": "b",
        "title": "分组2",
        "parent": "c",
        "children": [
          {
            "code": "m4",
            "groupId": "b"
          },
          {
            "code": "m5",
            "groupId": "b"
          }
        ]
      }
    ]
  },
  {
    "code": "m41"
  },
  {
    "code": "m42"
  },
  {
    "id": "d",
    "title": "分组4",
    "children": [
      {
        "code": "m6",
        "groupId": "d"
      },
      {
        "code": "m7",
        "groupId": "d"
      }
    ]
  },
  {
    "code": "m8"
  },
  {
    "code": "m9"
  }
]

