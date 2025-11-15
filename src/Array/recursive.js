const componentMaps = [
  {
      name: 'Card',
      pc: 'Card',
      m: 'MCard',
  },
  {
      name: 'Button',
      pc: 'Button',
      m: 'MButton',
  },
  {
      name: 'Text',
      pc: 'Text',
      m: 'MText',
  },
  {
      name: 'Row',
      pc: 'Row',
      m: 'MRow',
  },
  {
      name: 'Col',
      pc: 'Col',
      m: 'MCol',
  },
  {
      name: 'ProSelect',
      pc: 'ProSelect',
      m: 'MProSelect',
  },
  {
      name: 'ProMultiSelect',
      pc: 'ProMultiSelect',
      m: 'MProMultiSelect',
  },
];

const pcMaps = componentMaps.map(({pc})=> pc)
const mMaps = componentMaps.map(({m})=> m)


const widgetTree = [
  {
    uuid: "d0625caa-f5b4-48cd-9024-fa1068100695",
    id: "Card1",
    name: "卡片1",
    props: {},
    type: "Card",
    anonymousStatesMap: {},
    slots: {
      children: [
        {
          uuid: "c24a80b7-ffdf-4475-9791-aaaab1f71615",
          id: "Button1",
          name: "按钮1",
          props: {
            children: "按钮",
          },
          type: "Button",
          anonymousStatesMap: {},
        },
      ],
    },
  },
  {
    uuid: "0d310b92-eca4-46d8-807a-6ea389372d8b",
    id: "Card2",
    name: "卡片2",
    props: {},
    type: "Card",
    anonymousStatesMap: {},
    slots: {
      children: [
        {
          uuid: "af8316aa-fe90-4a51-b5d5-6746e26f3266",
          id: "Text1",
          name: "文本1",
          props: {
            strong: "base",
            semantic: "",
            sign: "",
            size: "inherit",
            children: "文本1111",
          },
          type: "Text",
          anonymousStatesMap: {},
        },
      ],
    },
  },
  {
    uuid: "9fea91a3-7b5d-4d33-b02e-91577a75c03e",
    id: "Row1",
    name: "栅格行1",
    props: {
      gutter: 20,
      noWrap: true,
    },
    type: "Row",
    anonymousStatesMap: {},
    slots: {
      children: [
        {
          uuid: "fc4cb626-2943-402b-8834-15ae1b0053b1",
          id: "Col1",
          name: "栅格列1",
          props: {
            __mode: "flex",
            flex: "auto",
          },
          type: "Col",
          anonymousStatesMap: {},
          slots: {
            children: [
              {
                version: 2,
                uuid: "6c83c08d-5c3e-47a6-950d-131e652da4e3",
                id: "Select1",
                name: "单选选择器1",
                props: {
                  $formState: {
                    $$type: "$$var",
                    value: "3335f71b-ab37-4a79-8c13-faf7b59ff249",
                  },
                  defaultValue: "9bdf7159-4091-4aa2-80e7-2c996964cf44",
                  data: [
                    {
                      label: "选项1",
                      value: "9bdf7159-4091-4aa2-80e7-2c996964cf44",
                    },
                    {
                      label: "选项2",
                      value: "d1497300-69a0-4bcb-a9c5-79f33215a1c8",
                    },
                  ],
                  mode: "static",
                  enableAll: true,
                  defaultAll: true,
                  allOptionLabel: "全部",
                  limit: 100,
                },
                type: "ProSelect",
                anonymousStatesMap: {},
              },
            ],
          },
        },
        {
          uuid: "87efaa5e-3759-4ec5-8409-4f0b8a66c849",
          id: "Col2",
          name: "栅格列2",
          props: {
            __mode: "flex",
            flex: "auto",
          },
          type: "Col",
          anonymousStatesMap: {},
          slots: {
            children: [
              {
                version: 2,
                uuid: "efb51e24-5df9-4318-aa95-a33fab3b127e",
                id: "MultiSelect1",
                name: "多选选择器1",
                props: {
                  $formState: {
                    $$type: "$$var",
                    value: "50099396-4c74-4e86-9bfe-4900541d4fc0",
                  },
                  data: [
                    {
                      label: "选项1",
                      value: "466ea49a-fe56-40c5-89cc-ef89b2558d58",
                      defaultChecked: true,
                    },
                    {
                      label: "选项2",
                      value: "d666943c-f3fd-41d8-8388-fd35c1bf9b63",
                      defaultChecked: true,
                    },
                  ],
                  mode: "static",
                  enableAll: true,
                  limit: 100,
                },
                type: "ProMultiSelect",
                anonymousStatesMap: {},
              },
            ],
          },
        },
      ],
    },
  },
  {
    uuid: "3e0195ff-6f36-4829-a3a8-84f7d1e2695b",
    id: "Card3",
    name: "卡片3",
    props: {},
    type: "Card",
    anonymousStatesMap: {},
  },
];





function transformType(params, sys) {
  const _sys = sys === 'm' ? 'pc' : 'm';
  const aa =  componentMaps.find( item => item[sys] === params)
  console.log('aa: ', aa);
  return aa[_sys]
}


function recursive(arr, system) {
  if (!arr?.length) {
    return arr
  }

  return arr.map(element => {
    element.type = transformType(element.type, system);
    element.rawType = element.type;
    if (element.slots) {
      element.slots.children = recursive(element.slots.children, system)
    }
    return element
  });

}

const a = recursive(widgetTree, 'pc');
console.log('a: ', JSON.stringify(a));
